function plus(){
	let x = document.querySelector('input#left')
	let y = document.querySelector('input#right') 
  let ans = Number(x.value)+Number(y.value) 
	console.log(ans)
	let p = document.querySelector('span#answer') 
	p.textContent=ans
}

let b = document.querySelector('button#calc')
b.addEventListener('click',plus)