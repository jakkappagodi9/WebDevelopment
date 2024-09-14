const elements = document.getElementsByTagName('li');
for(let ele of elements)
    {
        ele.style.fontStyle = 'italic';
        if(ele.textContent == 'Mango')
        {
            ele.style.color = 'blue';
        }
    }