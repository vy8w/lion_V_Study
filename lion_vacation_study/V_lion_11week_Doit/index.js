window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');
    
    // ⭐submit 이벤트는 form 태그에서만 사용 가능
    form.addEventListener('submit', (e) => {
        // ⭐submit 동작에는 기본적으로 새로고침이 포함, 초기화 => preventDefault()로 이를 방지
        e.preventDefault();

        const task = input.value;   // input창에 적을 내용
    
        // 만약 input창에 아무것도 적지 않은 상태에서 '+' 버튼을 클릭할 경우
        if(!task){
            alert('오늘의 할 일을 적어주세요');
            return;
        }

        // input창에 할 일을 적고 '+' 버튼을 클릭할 경우

        // 전체 구조
        /*0️⃣div#tasks(list_el)
            1️⃣div.task(task_el) ➡️ 추가할 list를 담을 박스
                2️⃣div.content(task_content_el) ➡️ '⚪'과 input창을 담을 박스
                    4️⃣p(circle) ➡️ ⚪
                    5️⃣input.text(task_input_el) ➡️ list 내용
                3️⃣div.actions(task_actions_el) ➡️ button 담을 박스
                    6️⃣button.edit(task_edit_el) ➡️ 편집
                    7️⃣button.delete(task_delete_el) ➡️ 삭제*/

        // 1️⃣
        const task_el = document.createElement('div');
        task_el.classList.add('task');
        list_el.appendChild(task_el);

        // 2️⃣
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');
        task_el.appendChild(task_content_el);

        // 4️⃣ 선택사항
        const circle = document.createElement('p');
        circle.innerText = '⚪';
        task_content_el.appendChild(circle);

        // 5️⃣
        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');
        task_content_el.appendChild(task_input_el);

        // 3️⃣
        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');
        task_el.appendChild(task_actions_el);

        // 6️⃣
        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerHTML = '✏️';
        task_actions_el.appendChild(task_edit_el);

        // 7️⃣
        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerHTML = '🗑️';
        task_actions_el.appendChild(task_delete_el);

        // 편집
        input.value = '';
        task_edit_el.addEventListener('click', () => {
            if(task_edit_el.innerText == '✏️'){
                task_input_el.removeAttribute('readonly');
                task_input_el.focus();
                task_edit_el.innerText = '✔️';
            }
            else{
                task_input_el.setAttribute('readonly', 'readonly');
                task_edit_el.innerText = '✏️';
            }
        })

        // 삭제
        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        })
    })
})