 const users = [
     { id:1,name:'ID',age:36},
     { id:2,name:'BJ',age:32},
     { id:3,name:'JM',age:32},
     { id:4,name:'PJ',age:27},
     { id:5,name:'HA',age:25},
     { id:6,name:'JE',age:26},
     { id:7,name:'JI',age:31},
     { id:8,name:'MP',age:23}
 ];
 
 //1.명령어 코드 
 //1. 30세 이상인 users를 거른다.
 
    // console.log(users);
    // console.log(typeof(users));
    //console.log(typeof('[]'));
    //console.log(typeof({}));

    /* 
    # 혼자 해본 예제  
    const userFilter = (users,callback) => {
        let returnVal=new Array();
        users.forEach( obj => {
            if(obj.age > 30){
            returnVal.push(obj.name);    
            }
        });
        callback(returnVal);
    }

    userFilter(users,
        (obj) => {
            console.log(obj);
        }        
    );*/
    
    let temp_users=[];
    for(let i = 0 ; i <users.length;i++){
        if(users[i].age>=30){
            temp_users.push(users[i]);
        }
    }
    console.log(`temp_users: ${temp_users}`);
    

    //2. 30세 이상인 users의 names를 수집한다.
    let names =[];
    for(let i=0;i<temp_users.length;i++){
        names.push(temp_users[i].name);
    }
    console.log(names);
    //3. 30세 미만인 users를 거른다.

    temp_users=[];
    for(let i = 0 ; i <users.length;i++){
        if(users[i].age < 30){
            temp_users.push(users[i]);
        }
    }
    console.log(`temp_users: ${temp_users}`);
    //4. 30세 미만인 users의 ages 를 수집한다.
    
    let ages=[];
    for(let i=0;i<temp_users.length;i++){
        ages.push(temp_users[i].age);
    }
    console.log(ages);

// 1.위의 코드는 중복이 많다. 연산자는 제외하고 비슷하다. 

// 2._filter,_map으로 리팩토링
// 추상화 단위를 함수로
// 고차함수 = > 함수를 매개변수를 받는 함수
function _filter(use,predi /* 함수 */){   //응용 형함수
    let new_list=[];
    for(let i = 0 ; i <use.length;i++){
        if(predi(use[i])){    //함수로 위임 
            new_list.push(use[i]);
        }
    }
    return new_list;
}

function _map(list,mapper /* 콜렉터*/){
    let new_list=[];
    for(let i = 0 ; i <list.length;i++){
       // if(list[i].age < 30){
            new_list.push(mapper(list[i]));
        //}
    }
    return new_list;
}

const over_30=_filter(users,(user)=> { return user.age >= 30;});
const map_30=_map(over_30,(use)=> use.name);
const lower_30=_filter(users,(user)=> { return user.age < 30;});
const map_lower_30_age=_map(lower_30,(use)=> use.age);
//console.log("고차원 함수 실행=>" +_filter(users,(user)=> { return user.age >= 30;}));
//console.log("고차원 함수 실행2=>" +_filter(users,(user)=> { return user.age < 30;}));
const anyF2=_filter([1,2,3,4],(num)=>{
    return num % 2;
})  // 1, 3
const anyF= _filter([1,2,3,4],(num)=>{
    return !(num % 2);
}) // 0/ 2          다형성 상승
console.log(anyF); 

var test =_filter(users,(usersObj)=>  usersObj.age >= 30);
var test2=_map(test,(use) => use.name);

/*순수 함수 */
const  naturalFunction = _map(
    _filter(users,(usersObj)=>  usersObj.age >= 30),
    (use) =>  use.name
)
console.log(naturalFunction);