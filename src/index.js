import ReactDom from "react-dom/client" ;
import  "./index.css"
import App from "./App";
// import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');
const ReactRoot = ReactDom.createRoot(root);

ReactRoot.render(
     <App   />
);