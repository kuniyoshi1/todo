//格納用の配列
let data = {
  task:[],
  done:[]
}




//addボタン押した時の挙動
document.getElementById('add').addEventListener('click',function(){
  let value = document.getElementById('task').value;
  //console.log(value);
  addTask(value);
  
  console.log(data.task);
});

//-------------------関数-----------------------
//タスクをデータに格納
function addTask(value){
  
  //データ(valueの中身)を配列に格納
  data.task.push(value);

}





