'use strict';

import { WorkspaceContext } from '../../WorkspaceContext';
import { TextDocument, Position, CompletionItemProvider, CompletionItemKind, CompletionItem, CancellationToken } from 'vscode';
import { formatResources, formatFullResources } from '../../helper/ResourceHelper';
import { getDocKeyByPos } from '../../helper/KeywordHelper';
import { stringArrayToCompletionItems } from '../../Util';
import { SYNTAX } from '../../dictionary/KeywordDictionary';
import { RobotDoc } from '../../model/RobotDoc';

export class RobotCompletionProvider implements CompletionItemProvider {

	public provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken)
		: Thenable<CompletionItem[]> | CompletionItem[] {
		let line = document.lineAt(position);
		let keyword = getDocKeyByPos(document, position);
		let resourceMatcher1 = line.text.match(/^([rR][eE]?[sS]?[oO]?[uU]?[rR]?[cC]?[eE]?)$/);
		let resourceMatcher2 = line.text.match(/^Resource\s{2,}(([-_]+|\w+)+)\s*$/);
		if (resourceMatcher1) {
			return this.matchResource(document);
		}
		else if (resourceMatcher2) {
			return this.completeResource(document);
		}
		else if (keyword != null) {
			let key: string;
			if (keyword.length == 2) {
				key = keyword[1];
			}
			else {
				key = keyword[0];
			}
			let words = key.split(/\s/);
			if (words.length == 1 && keyword.length == 1) {
				return this.matchKeyword(document);
			}
			else if (words.length == 1 && keyword.length == 2) {
				this.matchFileLastSentence(keyword[0], words[0], document);
			}
			else {
				let firstSentences: string = "";
				let length = words.length - 1;
				for (let i = 0; i < length; i++) {
					firstSentences += words[i] + " ";
				}
				if (keyword.length == 2) {
					return this.matchFileLastSentence(keyword[0], firstSentences, document);
				}
				else {
					return this.matchLastSentence(firstSentences, document);
				}
			}
		}
		else {
			return stringArrayToCompletionItems(SYNTAX, CompletionItemKind.Keyword);
		}
	}

	private matchLastSentence(firstSentences: string, document: TextDocument): CompletionItem[] {
		let thisDoc = RobotDoc.parseDocument(document);
		let local = stringArrayToCompletionItems(
			this.firstMatcher(firstSentences, thisDoc.keywordsName), CompletionItemKind.Function
		);
		let key = stringArrayToCompletionItems(
			this.firstMatcher(firstSentences, thisDoc.allAvailableKeywordsName), CompletionItemKind.Function
		);
		let libKey = stringArrayToCompletionItems(
			this.firstMatcher(firstSentences, thisDoc.library), CompletionItemKind.Function
		);
		let syntax = stringArrayToCompletionItems(
			this.firstMatcher(firstSentences, SYNTAX), CompletionItemKind.Keyword
		);
		return local.concat(key, libKey, syntax);

	}

	private matchFileLastSentence(fileName: string, firstSentences: string, document: TextDocument): CompletionItem[] {
		let doc = RobotDoc.parseDocument(document);
		let keywords = doc.getKeywordsNameByResourceName(fileName);
		let completionItem = stringArrayToCompletionItems(
			this.firstMatcher(firstSentences, keywords), CompletionItemKind.Function
		);
		return completionItem;
	}

	private matchKeyword(document: TextDocument): CompletionItem[] {
		let thisDoc = RobotDoc.parseDocument(document);
		let included = stringArrayToCompletionItems(thisDoc.allResourcesName, CompletionItemKind.Class);
		let localKeyComplete = stringArrayToCompletionItems(thisDoc.keywordsName, CompletionItemKind.Function);
		let keyComplete = stringArrayToCompletionItems(
			thisDoc.allAvailableKeywordsFullName, CompletionItemKind.Function
		);
		let otherKey = this.getLibAndSyntax(thisDoc);
		return included.concat(otherKey, localKeyComplete, keyComplete);
	}

	private getLibAndSyntax(doc: RobotDoc): CompletionItem[] {
		let libKey = stringArrayToCompletionItems(doc.library, CompletionItemKind.Function);
		let syntax = stringArrayToCompletionItems(SYNTAX, CompletionItemKind.Keyword);
		return libKey.concat(syntax);;
	}

	private completeResource(document: TextDocument): CompletionItem[] {
		let resources = WorkspaceContext.getAllPath();
		let resourceRelativePath = formatResources(document, "", resources);
		return stringArrayToCompletionItems(resourceRelativePath, CompletionItemKind.File);
	}

	private matchResource(document: TextDocument): CompletionItem[] {
		let resources = WorkspaceContext.getAllPath();
		let includesFormat = formatFullResources(document, resources);
		let completionItem = stringArrayToCompletionItems(includesFormat, CompletionItemKind.File);
		return [
			new CompletionItem("Resource", CompletionItemKind.Keyword)
		].concat(completionItem);;
	}

	private firstMatcher(firstSentences: string, keys: string[]): string[] {
		let result: string[] = [];
		for (let i = 0; i < keys.length; i++) {
			let found = keys[i].indexOf(firstSentences)
			if (found == 0) {
				result.push(keys[i].substr(firstSentences.length));
			}
		}
		return result;
	}

}
