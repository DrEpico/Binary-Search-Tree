(()=>{"use strict";class t{constructor(t){this.data=t,this.left=null,this.right=null}}const e=(t,r="",l=!0)=>{null!==t&&(null!==t.right&&e(t.right,`${r}${l?"│   ":"    "}`,!1),console.log(`${r}${l?"└── ":"┌── "}${t.data}`),null!==t.left&&e(t.left,`${r}${l?"    ":"│   "}`,!0))},r=t=>{const e=[];t.levelOrder((t=>e.push(t.data))),console.log("Level-order:",e.join(", "));const r=[];t.preOrder((t=>r.push(t.data))),console.log("Pre-order:",r.join(", "));const l=[];t.inOrder((t=>l.push(t.data))),console.log("In-order:",l.join(", "));const n=[];t.postOrder((t=>n.push(t.data))),console.log("Post-order:",n.join(", "))},l=generateRandomArray(15),n=new class{constructor(t){this.root=this.buildTree(t)}buildTree(t){return 0===t.length?null:(t=[...new Set(t)].sort(((t,e)=>t-e)),this.buildTreeHelper(t,0,t.length-1))}buildTreeHelper(e,r,l){if(r>l)return null;const n=Math.floor((r+l)/2),o=new t(e[n]);return o.left=this.buildTreeHelper(e,r,n-1),o.right=this.buildTreeHelper(e,n+1,l),o}insert(e){const r=new t(e);if(!this.root)return void(this.root=r);let l=this.root,n=null;for(;l;)if(n=l,e<l.data){if(l=l.left,!l)return void(n.left=r)}else{if(!(e>l.data))return;if(l=l.right,!l)return void(n.right=r)}}deleteItem(t,e){if(null===t)return t;if(e<t.data)t.left=this.deleteItem(t.left,e);else if(e>t.data)t.right=this.deleteItem(t.right,e);else{if(null===t.left)return t.right;if(null===t.right)return t.left;t.data=this.minValue(t.right),t.right=this.deleteItem(t.right,t.data)}return t}minValue(t){let e=t.data;for(;null!==t.left;)e=t.left.data,t=t.left;return e}find(t){let e=this.root;for(;e;)if(t<e.data)e=e.left;else{if(!(t>e.data))return e;e=e.right}return null}levelOrder(t){if("function"!=typeof t)throw new Error("A callback function is required");if(!this.root)return;const e=[this.root];for(;e.length>0;){const r=e.shift();t(r),r.left&&e.push(r.left),r.right&&e.push(r.right)}}inOrder(t){if("function"!=typeof t)throw new Error("A callback function is required");const e=r=>{null!==r&&(e(r.left),t(r),e(r.right))};e(this.root)}preOrder(t){if("function"!=typeof t)throw new Error("A callback function is required");const e=r=>{null!==r&&(t(r),e(r.left),e(r.right))};e(this.root)}postOrder(t){if("function"!=typeof t)throw new Error("A callback function is required");const e=r=>{null!==r&&(e(r.left),e(r.right),t(r))};e(this.root)}height(t){if(null===t)return-1;const e=this.height(t.left),r=this.height(t.right);return Math.max(e,r)+1}depth(t){if(null===t)return-1;let e=this.root,r=0;for(;null!==e;){if(t.data<e.data)e=e.left;else{if(!(t.data>e.data))return r;e=e.right}r++}return-1}isBalanced(){const t=e=>{if(null===e)return 0;const r=t(e.left),l=t(e.right);return-1===r||-1===l||Math.abs(r-l)>1?-1:Math.max(r,l)+1};return-1!==t(this.root)}rebalance(){const t=[],e=r=>{null!==r&&(e(r.left),t.push(r.data),e(r.right))};e(this.root),this.root=this.buildTree(t)}}(l);console.log("Initial tree:"),e(n.root),console.log("Is the tree balanced?",n.isBalanced()),r(n),[101,102,103,104,105].forEach((t=>n.insert(t))),console.log("\nTree after unbalancing:"),e(n.root),console.log("Is the tree balanced?",n.isBalanced()),r(n),n.rebalance(),console.log("\nTree after rebalancing:"),e(n.root),console.log("Is the tree balanced?",n.isBalanced()),r(n)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLE9BQVRBLEVBQ0EsT0FBTyxFQUdYLE1BQU04QyxFQUFhSyxFQUFZbkQsRUFBS0gsTUFDOUJrRCxFQUFjSSxFQUFZbkQsRUFBS0YsT0FFckMsT0FBb0IsSUFBaEJnRCxJQUFzQyxJQUFqQkMsR0FBc0JwQixLQUFLeUIsSUFBSU4sRUFBYUMsR0FBZSxHQUN4RSxFQUdMcEIsS0FBS3FCLElBQUlGLEVBQVlDLEdBQWUsQ0FBQyxFQUdoRCxPQUFtQyxJQUE1QkksRUFBWXZELEtBQUtvQixLQUM1QixDQUVBLFNBQUFxQyxHQUNJLE1BQU1DLEVBQVEsR0FHUkMsRUFBa0J2RCxJQUNQLE9BQVRBLElBR0p1RCxFQUFldkQsRUFBS0gsTUFDcEJ5RCxFQUFNOUMsS0FBS1IsRUFBS0wsTUFDaEI0RCxFQUFldkQsRUFBS0YsT0FBTSxFQUk5QnlELEVBQWUzRCxLQUFLb0IsTUFHcEJwQixLQUFLb0IsS0FBT3BCLEtBQUtxQixVQUFVcUMsRUFDL0IsR0MxT2tCekMsR0FFdEJWLFFBQVFDLElBQUksaUJBQ1pMLEVBQVlPLEVBQUtVLE1BQ2pCYixRQUFRQyxJQUFJLHdCQUF5QkUsRUFBSzRDLGNBQzFDN0MsRUFBWUMsR0FFYyxDQUFDLElBQUssSUFBSyxJQUFLLElBQUssS0FDN0JrRCxTQUFRMUIsR0FBU3hCLEVBQUt1QixPQUFPQyxLQUUvQzNCLFFBQVFDLElBQUksNkJBQ1pMLEVBQVlPLEVBQUtVLE1BQ2pCYixRQUFRQyxJQUFJLHdCQUF5QkUsRUFBSzRDLGNBQzFDN0MsRUFBWUMsR0FFWkEsRUFBSytDLFlBRUxsRCxRQUFRQyxJQUFJLDZCQUNaTCxFQUFZTyxFQUFLVSxNQUNqQmIsUUFBUUMsSUFBSSx3QkFBeUJFLEVBQUs0QyxjQUMxQzdDLEVBQVlDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcGlkZW1vLy4vc3JjL2JpbmFyeVNlYXJjaFRyZWUuanMiLCJ3ZWJwYWNrOi8vYXBpZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSl7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMubGVmdCA9IG51bGw7XG4gICAgICAgIHRoaXMucmlnaHQgPSBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWUge1xuICAgIGNvbnN0cnVjdG9yKGFycmF5KXtcbiAgICAgICAgdGhpcy5yb290ID0gdGhpcy5idWlsZFRyZWUoYXJyYXkpO1xuICAgIH1cblxuICAgIGJ1aWxkVHJlZShhcnJheSl7XG4gICAgICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU29ydCB0aGUgYXJyYXkgYW5kIHJlbW92ZSBkdXBsaWNhdGVzXG4gICAgICAgIGFycmF5ID0gWy4uLm5ldyBTZXQoYXJyYXkpXS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRUcmVlSGVscGVyKGFycmF5LCAwLCBhcnJheS5sZW5ndGggLSAxKTtcbiAgICB9XG5cbiAgICBidWlsZFRyZWVIZWxwZXIoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgaWYgKHN0YXJ0ID4gZW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1pZCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICAgICAgICBjb25zdCBub2RlID0gbmV3IE5vZGUoYXJyYXlbbWlkXSk7XG5cbiAgICAgICAgbm9kZS5sZWZ0ID0gdGhpcy5idWlsZFRyZWVIZWxwZXIoYXJyYXksIHN0YXJ0LCBtaWQgLSAxKTtcbiAgICAgICAgbm9kZS5yaWdodCA9IHRoaXMuYnVpbGRUcmVlSGVscGVyKGFycmF5LCBtaWQgKyAxLCBlbmQpO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGluc2VydCh2YWx1ZSl7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IG5ld05vZGU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMucm9vdDtcbiAgICAgICAgbGV0IHBhcmVudCA9IG51bGw7XG5cbiAgICAgICAgd2hpbGUoY3VycmVudCl7XG4gICAgICAgICAgICBwYXJlbnQgPSBjdXJyZW50O1xuICAgICAgICAgICAgaWYodmFsdWUgPCBjdXJyZW50LmRhdGEpe1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LmxlZnQ7XG4gICAgICAgICAgICAgICAgaWYoIWN1cnJlbnQpe1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQubGVmdCA9IG5ld05vZGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID4gY3VycmVudC5kYXRhKXtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5yaWdodDtcbiAgICAgICAgICAgICAgICBpZighY3VycmVudCl7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5yaWdodCA9IG5ld05vZGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBkYXRhID09PSB2YWx1ZVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBkZWxldGVJdGVtKHJvb3QsIHZhbHVlKSB7XG4gICAgICAgIGlmIChyb290ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA8IHJvb3QuZGF0YSkge1xuICAgICAgICAgICAgcm9vdC5sZWZ0ID0gdGhpcy5kZWxldGVJdGVtKHJvb3QubGVmdCwgdmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID4gcm9vdC5kYXRhKSB7XG4gICAgICAgICAgICByb290LnJpZ2h0ID0gdGhpcy5kZWxldGVJdGVtKHJvb3QucmlnaHQsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChyb290LmxlZnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcm9vdC5yaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocm9vdC5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByb290LmxlZnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJvb3QuZGF0YSA9IHRoaXMubWluVmFsdWUocm9vdC5yaWdodCk7XG5cbiAgICAgICAgICAgIHJvb3QucmlnaHQgPSB0aGlzLmRlbGV0ZUl0ZW0ocm9vdC5yaWdodCwgcm9vdC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG5cbiAgICBtaW5WYWx1ZShub2RlKSB7XG4gICAgICAgIGxldCBtaW5WYWwgPSBub2RlLmRhdGE7XG4gICAgICAgIHdoaWxlIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG1pblZhbCA9IG5vZGUubGVmdC5kYXRhO1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUubGVmdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluVmFsO1xuICAgIH1cblxuICAgIGZpbmQodmFsdWUpe1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMucm9vdDtcblxuICAgICAgICB3aGlsZShjdXJyZW50KXtcbiAgICAgICAgICAgIGlmKHZhbHVlIDwgY3VycmVudC5kYXRhKXtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5sZWZ0O1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IGN1cnJlbnQuZGF0YSl7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucmlnaHQ7XG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBkYXRhID09PSB2YWx1ZVxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50OyAvLyByZXR1cm4gdGhlIG5vZGUgaXRzZWxmXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldmVsT3JkZXIoY2FsbGJhY2spe1xuICAgICAgICBpZih0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGNhbGxiYWNrIGZ1bmN0aW9uIGlzIHJlcXVpcmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMucm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcXVldWUgPSBbdGhpcy5yb290XTtcblxuICAgICAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICBjYWxsYmFjayhub2RlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYobm9kZS5sZWZ0KXtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKG5vZGUubGVmdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKG5vZGUucmlnaHQpe1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2gobm9kZS5yaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbk9yZGVyKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBjYWxsYmFjayBmdW5jdGlvbiBpcyByZXF1aXJlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5PcmRlckhlbHBlciA9IChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluT3JkZXJIZWxwZXIobm9kZS5sZWZ0KTtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5vZGUpO1xuICAgICAgICAgICAgaW5PcmRlckhlbHBlcihub2RlLnJpZ2h0KTtcbiAgICAgICAgfTtcblxuICAgICAgICBpbk9yZGVySGVscGVyKHRoaXMucm9vdCk7XG4gICAgfVxuXG4gICAgcHJlT3JkZXIoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGNhbGxiYWNrIGZ1bmN0aW9uIGlzIHJlcXVpcmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVPcmRlckhlbHBlciA9IChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKG5vZGUpO1xuICAgICAgICAgICAgcHJlT3JkZXJIZWxwZXIobm9kZS5sZWZ0KTtcbiAgICAgICAgICAgIHByZU9yZGVySGVscGVyKG5vZGUucmlnaHQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHByZU9yZGVySGVscGVyKHRoaXMucm9vdCk7XG4gICAgfVxuXG4gICAgcG9zdE9yZGVyKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBjYWxsYmFjayBmdW5jdGlvbiBpcyByZXF1aXJlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcG9zdE9yZGVySGVscGVyID0gKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zdE9yZGVySGVscGVyKG5vZGUubGVmdCk7XG4gICAgICAgICAgICBwb3N0T3JkZXJIZWxwZXIobm9kZS5yaWdodCk7XG4gICAgICAgICAgICBjYWxsYmFjayhub2RlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBwb3N0T3JkZXJIZWxwZXIodGhpcy5yb290KTtcbiAgICB9XG5cbiAgICBoZWlnaHQobm9kZSkge1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xOyAvLyBJZiB0aGUgbm9kZSBpcyBudWxsLCBoZWlnaHQgaXMgLTFcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxlZnRIZWlnaHQgPSB0aGlzLmhlaWdodChub2RlLmxlZnQpO1xuICAgICAgICBjb25zdCByaWdodEhlaWdodCA9IHRoaXMuaGVpZ2h0KG5vZGUucmlnaHQpO1xuXG4gICAgICAgIHJldHVybiBNYXRoLm1heChsZWZ0SGVpZ2h0LCByaWdodEhlaWdodCkgKyAxOyAvLyBIZWlnaHQgaXMgbWF4IG9mIGxlZnQgb3IgcmlnaHQgaGVpZ2h0ICsgMVxuICAgIH1cblxuICAgIGRlcHRoKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTsgLy8gSWYgdGhlIG5vZGUgaXMgbnVsbCwgZGVwdGggaXMgLTFcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5yb290O1xuICAgICAgICBsZXQgZGVwdGggPSAwO1xuXG4gICAgICAgIHdoaWxlIChjdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5kYXRhIDwgY3VycmVudC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubGVmdDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5kYXRhID4gY3VycmVudC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucmlnaHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZXB0aDsgLy8gTm9kZSBmb3VuZCwgcmV0dXJuIGRlcHRoXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZXB0aCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xOyAvLyBJZiB0aGUgbm9kZSBpcyBub3QgZm91bmQgaW4gdGhlIHRyZWUsIHJldHVybiAtMVxuICAgIH1cblxuICAgIGlzQmFsYW5jZWQoKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrSGVpZ2h0ID0gKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7IC8vIEJhc2UgY2FzZTogaGVpZ2h0IG9mIGEgbnVsbCBub2RlIGlzIDBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGVmdEhlaWdodCA9IGNoZWNrSGVpZ2h0KG5vZGUubGVmdCk7XG4gICAgICAgICAgICBjb25zdCByaWdodEhlaWdodCA9IGNoZWNrSGVpZ2h0KG5vZGUucmlnaHQpO1xuXG4gICAgICAgICAgICBpZiAobGVmdEhlaWdodCA9PT0gLTEgfHwgcmlnaHRIZWlnaHQgPT09IC0xIHx8IE1hdGguYWJzKGxlZnRIZWlnaHQgLSByaWdodEhlaWdodCkgPiAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xOyAvLyBUcmVlIGlzIG5vdCBiYWxhbmNlZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgobGVmdEhlaWdodCwgcmlnaHRIZWlnaHQpICsgMTsgLy8gUmV0dXJuIHRoZSBoZWlnaHQgb2YgdGhlIG5vZGVcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gY2hlY2tIZWlnaHQodGhpcy5yb290KSAhPT0gLTE7IC8vIFRyZWUgaXMgYmFsYW5jZWQgaWYgY2hlY2tIZWlnaHQgZG9lcyBub3QgcmV0dXJuIC0xXG4gICAgfVxuXG4gICAgcmViYWxhbmNlKCkge1xuICAgICAgICBjb25zdCBub2RlcyA9IFtdO1xuXG4gICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBwZXJmb3JtIGluLW9yZGVyIHRyYXZlcnNhbCBhbmQgY29sbGVjdCBub2Rlc1xuICAgICAgICBjb25zdCBpbk9yZGVyQ29sbGVjdCA9IChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluT3JkZXJDb2xsZWN0KG5vZGUubGVmdCk7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKG5vZGUuZGF0YSk7XG4gICAgICAgICAgICBpbk9yZGVyQ29sbGVjdChub2RlLnJpZ2h0KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBDb2xsZWN0IGFsbCBub2RlcyBpbiBzb3J0ZWQgb3JkZXJcbiAgICAgICAgaW5PcmRlckNvbGxlY3QodGhpcy5yb290KTtcblxuICAgICAgICAvLyBSZWJ1aWxkIHRoZSB0cmVlIHVzaW5nIHRoZSBjb2xsZWN0ZWQgbm9kZXNcbiAgICAgICAgdGhpcy5yb290ID0gdGhpcy5idWlsZFRyZWUobm9kZXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmRhdGF9YCk7XG4gICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgICAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcbiAgICB9XG59O1xuXG4vLyBGdW5jdGlvbiB0byBnZW5lcmF0ZSBhbiBhcnJheSBvZiByYW5kb20gbnVtYmVycyBsZXNzIHRoYW4gMTAwXG5jb25zdCBnZW5lcmF0ZVJhbmRvbUFycmF5ID0gKHNpemUsIG1heCA9IDEwMCkgPT4ge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgYXJyYXkucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xufTtcblxuLy8gZGVsZXRlSXRlbSh2YWx1ZSkge1xuLy8gICAgIHRoaXMucm9vdCA9IHRoaXMuZGVsZXRlUmVjKHRoaXMucm9vdCwgdmFsdWUpO1xuLy8gfVxuXG4vLyBkZWxldGVSZWMocm9vdCwgdmFsdWUpIHtcbi8vICAgICBpZiAocm9vdCA9PT0gbnVsbCkge1xuLy8gICAgICAgICByZXR1cm4gcm9vdDtcbi8vICAgICB9XG5cbi8vICAgICBpZiAodmFsdWUgPCByb290LmRhdGEpIHtcbi8vICAgICAgICAgcm9vdC5sZWZ0ID0gdGhpcy5kZWxldGVSZWMocm9vdC5sZWZ0LCB2YWx1ZSk7XG4vLyAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IHJvb3QuZGF0YSkge1xuLy8gICAgICAgICByb290LnJpZ2h0ID0gdGhpcy5kZWxldGVSZWMocm9vdC5yaWdodCwgdmFsdWUpO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIC8vIE5vZGUgdG8gYmUgZGVsZXRlZCBmb3VuZFxuLy8gICAgICAgICBpZiAocm9vdC5sZWZ0ID09PSBudWxsKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gcm9vdC5yaWdodDtcbi8vICAgICAgICAgfSBlbHNlIGlmIChyb290LnJpZ2h0ID09PSBudWxsKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gcm9vdC5sZWZ0O1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgLy8gTm9kZSB3aXRoIHR3byBjaGlsZHJlbjogR2V0IHRoZSBpbi1vcmRlciBzdWNjZXNzb3Jcbi8vICAgICAgICAgcm9vdC5kYXRhID0gdGhpcy5taW5WYWx1ZShyb290LnJpZ2h0KTtcbi8vICAgICAgICAgcm9vdC5yaWdodCA9IHRoaXMuZGVsZXRlUmVjKHJvb3QucmlnaHQsIHJvb3QuZGF0YSk7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHJvb3Q7XG4vLyB9IiwiaW1wb3J0IHsgTm9kZSwgVHJlZSwgcHJldHR5UHJpbnQgfSBmcm9tIFwiLi9iaW5hcnlTZWFyY2hUcmVlXCI7XG5cbi8vIGNvbnN0IGFycmF5ID0gWzEwLCA1LCAyMCwgMywgNywgMTUsIDMwXTtcbi8vIGNvbnN0IHRyZWUgPSBuZXcgVHJlZShhcnJheSk7XG4vLyBjb25zb2xlLmxvZyh0cmVlLnJvb3QpO1xuLy8gY29uc29sZS5sb2cocHJldHR5UHJpbnQodHJlZS5yb290KSk7XG5cbi8vIEZ1bmN0aW9uIHRvIHByaW50IGVsZW1lbnRzIGluIGRpZmZlcmVudCBvcmRlcnNcbmNvbnN0IHByaW50T3JkZXJzID0gKHRyZWUpID0+IHtcbiAgICBjb25zdCBsZXZlbE9yZGVyID0gW107XG4gICAgdHJlZS5sZXZlbE9yZGVyKG5vZGUgPT4gbGV2ZWxPcmRlci5wdXNoKG5vZGUuZGF0YSkpO1xuICAgIGNvbnNvbGUubG9nKFwiTGV2ZWwtb3JkZXI6XCIsIGxldmVsT3JkZXIuam9pbihcIiwgXCIpKTtcblxuICAgIGNvbnN0IHByZU9yZGVyID0gW107XG4gICAgdHJlZS5wcmVPcmRlcihub2RlID0+IHByZU9yZGVyLnB1c2gobm9kZS5kYXRhKSk7XG4gICAgY29uc29sZS5sb2coXCJQcmUtb3JkZXI6XCIsIHByZU9yZGVyLmpvaW4oXCIsIFwiKSk7XG5cbiAgICBjb25zdCBpbk9yZGVyID0gW107XG4gICAgdHJlZS5pbk9yZGVyKG5vZGUgPT4gaW5PcmRlci5wdXNoKG5vZGUuZGF0YSkpO1xuICAgIGNvbnNvbGUubG9nKFwiSW4tb3JkZXI6XCIsIGluT3JkZXIuam9pbihcIiwgXCIpKTtcblxuICAgIGNvbnN0IHBvc3RPcmRlciA9IFtdO1xuICAgIHRyZWUucG9zdE9yZGVyKG5vZGUgPT4gcG9zdE9yZGVyLnB1c2gobm9kZS5kYXRhKSk7XG4gICAgY29uc29sZS5sb2coXCJQb3N0LW9yZGVyOlwiLCBwb3N0T3JkZXIuam9pbihcIiwgXCIpKTtcbn07XG5cbi8vIEdlbmVyYXRlIGFuIGFycmF5IG9mIHJhbmRvbSBudW1iZXJzXG5jb25zdCByYW5kb21BcnJheSA9IGdlbmVyYXRlUmFuZG9tQXJyYXkoMTUpO1xuY29uc3QgdHJlZSA9IG5ldyBUcmVlKHJhbmRvbUFycmF5KTtcblxuY29uc29sZS5sb2coXCJJbml0aWFsIHRyZWU6XCIpO1xucHJldHR5UHJpbnQodHJlZS5yb290KTtcbmNvbnNvbGUubG9nKCdJcyB0aGUgdHJlZSBiYWxhbmNlZD8nLCB0cmVlLmlzQmFsYW5jZWQoKSk7XG5wcmludE9yZGVycyh0cmVlKTtcblxuY29uc3QgdW5iYWxhbmNpbmdWYWx1ZXMgPSBbMTAxLCAxMDIsIDEwMywgMTA0LCAxMDVdO1xudW5iYWxhbmNpbmdWYWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB0cmVlLmluc2VydCh2YWx1ZSkpO1xuXG5jb25zb2xlLmxvZyhcIlxcblRyZWUgYWZ0ZXIgdW5iYWxhbmNpbmc6XCIpO1xucHJldHR5UHJpbnQodHJlZS5yb290KTtcbmNvbnNvbGUubG9nKCdJcyB0aGUgdHJlZSBiYWxhbmNlZD8nLCB0cmVlLmlzQmFsYW5jZWQoKSk7XG5wcmludE9yZGVycyh0cmVlKTtcblxudHJlZS5yZWJhbGFuY2UoKTtcblxuY29uc29sZS5sb2coXCJcXG5UcmVlIGFmdGVyIHJlYmFsYW5jaW5nOlwiKTtcbnByZXR0eVByaW50KHRyZWUucm9vdCk7XG5jb25zb2xlLmxvZygnSXMgdGhlIHRyZWUgYmFsYW5jZWQ/JywgdHJlZS5pc0JhbGFuY2VkKCkpO1xucHJpbnRPcmRlcnModHJlZSk7Il0sIm5hbWVzIjpbIk5vZGUiLCJjb25zdHJ1Y3RvciIsImRhdGEiLCJ0aGlzIiwibGVmdCIsInJpZ2h0IiwicHJldHR5UHJpbnQiLCJub2RlIiwicHJlZml4IiwiaXNMZWZ0IiwiY29uc29sZSIsImxvZyIsInByaW50T3JkZXJzIiwidHJlZSIsImxldmVsT3JkZXIiLCJwdXNoIiwiam9pbiIsInByZU9yZGVyIiwiaW5PcmRlciIsInBvc3RPcmRlciIsInJhbmRvbUFycmF5IiwiZ2VuZXJhdGVSYW5kb21BcnJheSIsImFycmF5Iiwicm9vdCIsImJ1aWxkVHJlZSIsImxlbmd0aCIsIlNldCIsInNvcnQiLCJhIiwiYiIsImJ1aWxkVHJlZUhlbHBlciIsInN0YXJ0IiwiZW5kIiwibWlkIiwiTWF0aCIsImZsb29yIiwiaW5zZXJ0IiwidmFsdWUiLCJuZXdOb2RlIiwiY3VycmVudCIsInBhcmVudCIsImRlbGV0ZUl0ZW0iLCJtaW5WYWx1ZSIsIm1pblZhbCIsImZpbmQiLCJjYWxsYmFjayIsIkVycm9yIiwicXVldWUiLCJzaGlmdCIsImluT3JkZXJIZWxwZXIiLCJwcmVPcmRlckhlbHBlciIsInBvc3RPcmRlckhlbHBlciIsImhlaWdodCIsImxlZnRIZWlnaHQiLCJyaWdodEhlaWdodCIsIm1heCIsImRlcHRoIiwiaXNCYWxhbmNlZCIsImNoZWNrSGVpZ2h0IiwiYWJzIiwicmViYWxhbmNlIiwibm9kZXMiLCJpbk9yZGVyQ29sbGVjdCIsImZvckVhY2giXSwic291cmNlUm9vdCI6IiJ9