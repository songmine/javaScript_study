let input = document.querySelector('#item');
		let addBtn = document.querySelector('#add');
		let div = document.querySelector('#itemList');

		let items = [];

		//클릭했을때 addItem이 사용자입력값 가져오며 배열에 저장하게 해보자
		const addItem = function addItem() { 
			//사용자가 입력한 값을 items배열에 저장
			items.push(input.value);
			console.log(items);

			showItem(); //여행 준비물 웹 브라우저에 출력
		};

		const showItem = function showItem(){
			let tag = '<ul>';

			//반복문을 활용하여 배열에 저장된 데이터에 접근
			//배열의 크기만큼 li태그를 생성
			items.forEach(function(item, index) {
				tag += `<li>${item}<span class='close' id='${index}'>X</span></li>`;
			});
			tag +='</ul>';

			div.innerHTML = tag;
			// div.innerHTML = '<ul><li>여벌옷</li></ul>';

			removeItem();
		};

		const removeItem = function removeItem(){
			//모든 X버튼을 접근
			let removeBtns = document.querySelectorAll('span.close');

			console.log(removeBtns);

			//반복문을 활용해서 모든 X버튼에 클릭이벤트를 적용
			removeBtns.forEach(function(rmBtn, index){
				rmBtn.addEventListener('click', function(){
					items.splice(index,1);
					console.log(items);

					showItem(); //화면갱신
				}); //end event
			}); //end forEach
		};


		//addBtn에 클릭이벤트 적용
		addBtn.addEventListener('click', addItem );
