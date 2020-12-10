window.onload = function () {
  const boxdata = [
    {
      'title': '배움의 원칙',
      'content': '거꾸로캠퍼스가 실현하는 21세기 배움의 원칙 아홉 가지', 
      'learnMore': '자세히 보기 →'
    },
    {
      'title': '교육과정',
      'content': '거꾸로캠퍼스의 교육 과정과 교육 프로그램에 대한 안내', 
      'learnMore': '자세히 보기 →'
    },
    {
      'title': '학교생활',
      'content': '거꾸로캠퍼스를 만들어가는 학생과 교사들의 이야기',
      'learnMore': '자세히 보기 →'
    }
  ]

  for (const i in boxdata) {
    const singledata = boxdata[i]
    console.log(i)
    const element = document.createElement('div');
    const title = document.createElement('p')
    const content = document.createElement('p')
    const learnMore = document.createElement('p')

    title.innerText = singledata['title']
    content.innerText = singledata['content']
    learnMore.innerText = singledata['learnMore']

    element.appendChild(title)
    element.appendChild(content)
    element.appendChild(learnMore)
    element.classList.add('box')
    title.classList.add('title')
    content.classList.add('content')
    learnMore.classList.add('learnMore')
    if ((i % 2) != 0) { element.classList.add('darkBlue') };
    
    document.getElementById('container').appendChild(element)
  }
}