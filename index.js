let myLeads = []

localStorage.setItem('First Attempt', 'I hope it is successful')
localStorage.getItem(value)

// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("www.lead2.com")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)

localStorage.clear()
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)


document.getElementById('input-btn').addEventListener('click', function() {
    myLeads.push(document.getElementById('input-el').value)
    document.getElementById('input-el').value = ''
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

function renderLeads() {
    let listItems = ''
    for( let i=0; i<myLeads.length; i++) {
        listItems += `
        <li>
            <a href='${myLeads[i]}' target='_blank'> 
                ${myLeads[i]} 
            </a> 
        </li>
        `
        // document.getElementById('ul-el').innerHTML += "<li>" + myLeads[i] + "</li>"
    }
    document.getElementById('ul-el').innerHTML = listItems
}
