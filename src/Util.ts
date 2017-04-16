import vscode = require('vscode');

export class Util {

    public static extractFileName(path: string): string {
        return path.match(/([!"#%&'*+,.:<=>@\_`~-]*|\w+)+\.?\w*$/)[0];
    };

    public static extractFileNameWithNoExtension(path: string): string {
        return Util.extractFileName(path).replace(/\.\w+$/, "");
    }

    public static removeSamePath(a: string, b: string): string[] {
        let size = 0;
        for (let i = 0; i < b.length; i++) {
            if (i == a.length) {
                i = b.length;
            }
            else if (a.charAt(i) == b.charAt(i)) {
                size++;
            }
            else {
                i = b.length;
            }
        }
        let result = [a.substr(size), b.substr(size)];
        return result;
    }

    public static stringArrayToCompletionItems(suggestions: string[]): vscode.CompletionItem[] {
        let items: vscode.CompletionItem[] = [];
        for (let i = 0; i < suggestions.length; i++) {
            items.push(new vscode.CompletionItem(suggestions[i]));
        }
        return items;
    }

    public static analyzeSentenceLikeliness(sentence: string, suggestions: string[]): string[] {
        let suggestLikely: string[] = [];
        let search = sentence.toUpperCase();
        for (let i = 0; i < suggestions.length; i++) {
            let options = suggestions[i].toUpperCase();
            if (options.includes(search)) {
                suggestLikely.push(suggestions[i]);
            }
        }
        return suggestLikely;
    }
}