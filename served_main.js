import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=9473c89f"; const StrictMode = __vite__cjsImport0_react["StrictMode"];
import __vite__cjsImport1_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=9473c89f"; const createRoot = __vite__cjsImport1_reactDom_client["createRoot"];
import { PersistGate } from "/node_modules/.vite/deps/redux-persist_integration_react.js?v=9473c89f";
import { persistStore } from "/node_modules/.vite/deps/redux-persist.js?v=9473c89f";
import "/src/index.css";
import { Provider } from "/node_modules/.vite/deps/react-redux.js?v=9473c89f";
import App from "/src/App.jsx";
import store from "/src/store/index.jsx?t=1776403719037";
var _jsxFileName = "C:/Users/sebas/curso-react/tienda/src/main.jsx";
import __vite__cjsImport8_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9473c89f"; const _jsxDEV = __vite__cjsImport8_react_jsxDevRuntime["jsxDEV"];
let persistor;
console.log("main.jsx loaded");
try {
	persistor = persistStore(store);
} catch (err) {
	console.error("persistStore error:", err);
}
const rootEl = document.getElementById("root");
console.log("root element:", rootEl);
try {
	createRoot(rootEl).render(/* @__PURE__ */ _jsxDEV(StrictMode, { children: /* @__PURE__ */ _jsxDEV(Provider, {
		store,
		children: /* @__PURE__ */ _jsxDEV(PersistGate, {
			loading: null,
			persistor,
			children: /* @__PURE__ */ _jsxDEV(App, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 23,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 22,
		columnNumber: 5
	}, this));
} catch (err) {
	// Ensure runtime errors during initial render are visible in the browser console
	console.error("Render error:", err);
	throw err;
}

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsU0FBUyxrQkFBa0I7QUFDM0IsU0FBUyxrQkFBa0I7QUFDM0IsU0FBUyxtQkFBbUI7QUFDNUIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTztBQUNQLFNBQVMsZ0JBQWdCO0FBQ3pCLE9BQU8sU0FBUztBQUNoQixPQUFPLFdBQVc7OztBQUVsQixJQUFJO0FBQ0osUUFBUSxJQUFJLGtCQUFrQjtBQUM5QixJQUFJO0FBQ0YsYUFBWSxhQUFhLE1BQU07U0FDeEIsS0FBSztBQUNaLFNBQVEsTUFBTSx1QkFBdUIsSUFBSTs7QUFHM0MsTUFBTSxTQUFTLFNBQVMsZUFBZSxPQUFPO0FBQzlDLFFBQVEsSUFBSSxpQkFBaUIsT0FBTztBQUNwQyxJQUFJO0FBQ0YsWUFBVyxPQUFPLENBQUMsT0FDakIsd0JBQUMsWUFBRCxZQUNFLHdCQUFDLFVBQUQ7RUFBaUI7WUFDZix3QkFBQyxhQUFEO0dBQWEsU0FBUztHQUFpQjthQUNyQyx3QkFBQyxLQUFELEVBQU87Ozs7O0dBQ0s7Ozs7O0VBQ0w7Ozs7V0FDQTs7OztVQUNkO1NBQ00sS0FBSzs7QUFFWixTQUFRLE1BQU0saUJBQWlCLElBQUk7QUFDbkMsT0FBTSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJtYWluLmpzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJpY3RNb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCdcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSAncmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdCdcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnXG5pbXBvcnQgJy4vaW5kZXguY3NzJ1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAuanN4J1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUvaW5kZXguanN4J1xuXG5sZXQgcGVyc2lzdG9yO1xuY29uc29sZS5sb2coJ21haW4uanN4IGxvYWRlZCcpO1xudHJ5IHtcbiAgcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKTtcbn0gY2F0Y2ggKGVycikge1xuICBjb25zb2xlLmVycm9yKCdwZXJzaXN0U3RvcmUgZXJyb3I6JywgZXJyKTtcbn1cblxuY29uc3Qgcm9vdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbmNvbnNvbGUubG9nKCdyb290IGVsZW1lbnQ6Jywgcm9vdEVsKTtcbnRyeSB7XG4gIGNyZWF0ZVJvb3Qocm9vdEVsKS5yZW5kZXIoXG4gICAgPFN0cmljdE1vZGU+XG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPFBlcnNpc3RHYXRlIGxvYWRpbmc9e251bGx9IHBlcnNpc3Rvcj17cGVyc2lzdG9yfT5cbiAgICAgICAgICA8QXBwIC8+XG4gICAgICAgIDwvUGVyc2lzdEdhdGU+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvU3RyaWN0TW9kZT5cbiAgKTtcbn0gY2F0Y2ggKGVycikge1xuICAvLyBFbnN1cmUgcnVudGltZSBlcnJvcnMgZHVyaW5nIGluaXRpYWwgcmVuZGVyIGFyZSB2aXNpYmxlIGluIHRoZSBicm93c2VyIGNvbnNvbGVcbiAgY29uc29sZS5lcnJvcignUmVuZGVyIGVycm9yOicsIGVycik7XG4gIHRocm93IGVycjtcbn1cbiJdfQ==