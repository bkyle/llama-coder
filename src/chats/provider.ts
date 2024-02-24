import { CancellationToken, WebviewView, WebviewViewProvider, WebviewViewResolveContext } from "vscode";

export class ChatProvider implements WebviewViewProvider {

    private _view?: WebviewView;

    resolveWebviewView(webviewView: WebviewView, context: WebviewViewResolveContext<unknown>, token: CancellationToken): void | Thenable<void> {
        this._view = webviewView;

        webviewView.webview.options = {
            enableScripts: true,
        };
        webviewView.title = "Llama Chat";
        webviewView.webview.html = "<html><body>Llama Coder Chat</body></html>";
    }

}
