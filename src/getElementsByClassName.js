// If life was easy, we could just do things the  easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
	var $body = document.body;
	var result=[];
	var lookForclass = function (node) {
			if(node.classList=== undefined){}
			else{
				console.log(node.classList);
				count = node.classList.length-1;
				while (count>=0){
				if( node.classList[count]===className){
					result.push(node);
						break;
					}
					count--;
				}
			}
	};
	var htmlDigger = function (node) {
		var nodeLen = node.childNodes.length-1;
		lookForclass(node)
		if(nodeLen>=0){
				
			while(nodeLen>=0){
			htmlDigger(node.childNodes[nodeLen]);
			nodeLen--;
			}
		}
	};
	htmlDigger($body);

	return result;
  // your code here
};

