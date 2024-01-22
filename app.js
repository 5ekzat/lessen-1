const input=document.querySelector('input')
const root=document.querySelector('#root')

const foods=[
    {title:'Cake', ing1:'Milk', ingr2:'chocolate'}, 
    {title:'Soup', ing1:'Broccoli', ingr2:'Shpinat',  ingr3:'Carrot'}, 
    {title:'Panini', ing1:'Bread', ingr2:'Chicken', ingr3:'Sour cream',  ingr4:'Shpinat'}, 
    {title:'Smoothie', ing1:'Milk', ingr2:'Apricot',  ingr3:'Banana',  ingr4:'Cherry'},   
]

input.onchange=()=>{
    console.log(input.value);
    const arr=foods.filter(el=>el.title.toLowerCase()===input.value.toLowerCase())
    console.log(arr);
    if(arr.length>0){
        const ingredients = []
        for (let key in arr[0]){
            if (key.startsWith('ing')) {
                ingredients.push(arr[0][key])
            }
        }
        root.innerHTML=`
        <h1>${arr[0].title}</h1>
        <p>${ingredients.join(', ')}</p>
        `
    }else {
        root.innerHTML=`<h1> Sorry ${input.value}</h1>`
    }
    input.value=''
}