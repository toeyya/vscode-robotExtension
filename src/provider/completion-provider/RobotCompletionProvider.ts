'use strict';

import { WorkspaceContext } from '../../WorkspaceContext';
import vscode = require('vscode');
import { ResourceHelper } from '../../helper/ResourceHelper';
import { KeywordHelper } from '../../helper/KeywordHelper';
import { Util } from '../../Util';

var SYNTAX = [
	"Documentation", "Library", "Resouce"
];

export class RobotCompletionProvider implements vscode.CompletionItemProvider {

	public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Thenable<vscode.CompletionItem[]> | vscode.CompletionItem[] {
		WorkspaceContext.scanWorkspace();
		let line = document.lineAt(position);
		let keywordMatcher1 = line.text.match(/^\s+(((_|-)*|\w+)+)/);
		let keywordMatcher2 = line.text.match(/^\s+.+\s{2,}(((_|-)*|\w+)+)/);
		let resourceMatcher1 = line.text.match(/^([rR][eE]?[sS]?[oO]?[uU]?[rR]?[cC]?[eE]?)$/);
		let resourceMatcher2 = line.text.match(/^Resource\s{2,}(\.?\.?\S*)/);
		if (resourceMatcher1) {
			return Promise.resolve<vscode.CompletionItem[]>(this.resourceMatcher(document, resourceMatcher1[0]));
		}
		else if (resourceMatcher2) {
			return Promise.resolve<vscode.CompletionItem[]>(this.resourceCompleter(document, resourceMatcher2[1]));
		}
		else if (keywordMatcher1) {
			return Promise.resolve<vscode.CompletionItem[]>(this.keywordMatcher(document, keywordMatcher1[1]));
		}
		else if (keywordMatcher2) {
			return Promise.resolve<vscode.CompletionItem[]>(this.keywordMatcher(document, keywordMatcher2[1]));
		}
		else {
			return Util.stringArrayToCompletionItems(SYNTAX);
		}
	}

	private keywordMatcher(document: vscode.TextDocument, fileName: string): vscode.CompletionItem[] {
		let included = ResourceHelper.allIncludedResources(document);
		let localKeywords = KeywordHelper.keywordSearcher(document)
		let includedKeywords = KeywordHelper.allIncludedKeywordsSearcher(included);
		let libKeywords = KeywordHelper.getKeywordLibrary(included.concat(document));
		let allKeywords = localKeywords.concat(includedKeywords, libKeywords);
		let suggestionsString = Util.sentenceLikelyAnalyzer(fileName, Array.from(new Set(allKeywords)));
		return Util.stringArrayToCompletionItems(suggestionsString);
	}

	private resourceCompleter(document: vscode.TextDocument, path: string): vscode.CompletionItem[] {
		let resources = WorkspaceContext.getAllPath();
		let resourceRelativePath = ResourceHelper.resourcesFormatter(document, "", resources);
		let suggestionsString = Util.sentenceLikelyAnalyzer(path, Array.from(new Set(resourceRelativePath)));
		return Util.stringArrayToCompletionItems(suggestionsString);
	}

	private resourceMatcher(document: vscode.TextDocument, fileName: string): vscode.CompletionItem[] {
		let resources = WorkspaceContext.getAllPath();
		let includesFormat = ResourceHelper.autoResourcesFormatter(document, resources);
		let suggestionsString = Util.sentenceLikelyAnalyzer(fileName, Array.from(new Set(includesFormat)));
		return Util.stringArrayToCompletionItems(suggestionsString);
	}

}