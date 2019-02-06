//格納用の配列
let data = {
  task:[],
  done:[]
}

//アイコンをここに用意します
let removeIcon = '<i class="fas fa-trash-alt fa-lg"></i>';
let doneIcon = '<i class="far fa-check-circle"></i>';



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
  addTaskToDOM(value);

}


//画面に登録したいタスクを表示する為の関数
function addTaskToDOM(text, isDone){
  
//doneタスクか、not-yetタスクか、判定させる
  let list;
  if(isDone){
    list = document.getElementById('done');
  }else{
    list = document.getElementById('not-yet');
  }
  
//liタグを作成
  
  //変数taskにliタグを作成して挿入
  let task = document.createElement('li');
  //liタグのテキストに引数textを挿入
  task.textContent = text;
  
  
//divタグ作成
  let buttons = document.createElement('div');
//  buttons.className = 'buttons';
  buttons.classList.add('buttons');

//ボタンを作成(追加)

//削除ボタン
  let remove = document.createElement('button');
  //cssあとから書くよ
  remove.classList.add('remove');
  //HTMLに追加
  remove.innerHTML = removeIcon;
  //押された時の処理
  remove.addEventListener('click',removeTask);
  
  
//完了ボタン
  let done = document.createElement('button');
  //classつける
  done.classList.add('done');
  //htmlに追加
  done.innerHTML = doneIcon;

  
  
//DOMの組み立て
  buttons.appendChild(remove);
  buttons.appendChild(done);
  task.appendChild(buttons);
  

//組み立てたDOMを挿入
  list.insertBefore(task, list.childNodes[0]);
  
}


function removeTask(){
  let task = this.parentNode.parentNode;
  let id = task.parentNode.id;
  let value = task.textContent;
  
  //画面から削除
  task.remove();
  
  //配列から削除
  if(id === 'not-yet'){
    data.task.splice(data.task.indexOf(value), 1);
  }else{
    data.done.splice(data.done.indexOf(value), 1);
   }
  
}


function doneTask(){
  
  
}












