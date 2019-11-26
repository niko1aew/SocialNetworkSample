import * as serviceWorker from "./serviceWorker";
import { renderViewTree } from "./render";
import state from "./Redux/state";

renderViewTree(state);
serviceWorker.unregister();
