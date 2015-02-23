// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
var arr =[];
var result;

var test_basic = function (val){
	var temp;
	if(val === null){arr.push('null');}

	else if (typeof(val)==='string'){
		arr.push('"'+val+'"');
	} 

	else if(Array.isArray(val)){
		arr.push("]");

		if(val.length>1){
			while (val.length>1){
				temp = val[val.length-1];
				var dummy =val.pop();
				test_basic(temp);
				arr.push(',');
			}
			test_basic(val[0]);
		}
		else if(val[0] === undefined){}
		else{
			test_basic(val[0]);
			}
		arr.push("[");
	}
	else if(val !== null && typeof val === 'object'){
			arr.push("}");
			var list=[];
			var count=0;
			for(var x in val){ list.push(x);
			}
			count= list.length-1;
			if (count>=1){
				while(count>=0){
					if(typeof(val[list[count]])==="function"||typeof(val[list[count]])==="undefined"){}

					else if(count===(list.length-1)){
						test_basic(val[list[count]]);
						arr.push(":");
						test_basic(list[count]);
					}
					else{
						arr.push(",");
						test_basic(val[list[count]]);
						arr.push(":");
						test_basic(list[count]);	
					}
					count--;
				}
			}
		    else {
				if(val[list[0]]=== undefined){}
				else{	
					test_basic(val[list[count]]);
					arr.push(":");
					test_basic(list[count]);
				}
			}
			arr.push("{");
	}
	else{ 
 		var type = val.toString();
 		arr.push(type);}

};
var strOut= function (x) {
	var temp;
	var	len =x.length-1;
	if (len === 0){
		return x[0];
	}
	else{
		temp = x.pop();
		return temp+strOut(x); 
	}
};
	test_basic(obj);
	result = strOut(arr);

	return result;
};
