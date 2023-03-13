const table = document.getElementById('bagua-table')
let initialTd = null
let textarea = null
let isEdit = false

table.addEventListener('click', (event) => {
  const target = event.target.closest('.ok-btn,.cansel-btn,td')
  if (!target) return
  if (target.className === 'ok-btn') {
    saveChanges(target)
  } else if (target.className === 'cansel-btn') {
    deleteChanges(target)
  } else if (target.nodeName === 'TD') {
    if (isEdit) return
    startEditing(target)
  }
})

const startEditing = (block) => {
  isEdit = true
  initialTd = {
    className: block.className,
    innerHTML: block.innerHTML,
  }

  textarea = document.createElement('textarea')
  textarea.value = block.innerHTML
  textarea.className = 'edit-textarea'
  textarea.style.width = block.offsetWidth + 'px'
  textarea.style.height = block.offsetHeight + 'px'

  block.innerHTML = ''
  block.className = 'edit-td'

  const editButtons = document.createElement('div')
  editButtons.className = 'edit-buttons'
  editButtons.innerHTML = `
  <button class='ok-btn'>ok</button><button class='cansel-btn'>cancel</button>
  `

  block.append(textarea)
  block.append(editButtons)
}

const saveChanges = (target) => {
  const tdBlock = target.closest('td')
  tdBlock.className = initialTd.className
  tdBlock.innerHTML = textarea.value
  isEdit = false
}

const deleteChanges = (target) => {
  const tdBlock = target.closest('td')
  tdBlock.className = initialTd.className
  tdBlock.innerHTML = initialTd.innerHTML
  isEdit = false
}
