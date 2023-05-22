const url = 'https://restcountries.com/v3.1/all?fields=name,flags';
const fakeShop = async() => {
    const respone = await fetch(url)
    const data = await respone.json()
        // const a = await fetchData();
        // console.log(data)

    let showData = '';
    let results = [];


    data.forEach(flag => {
        let i;
        const item = flag.name.nativeName
            // console.log('length ', typeof item)
            //console.log(item.children);

        const itemKeys = [];
        const childItem = [];
        Object.keys(item).forEach(key => {
            itemKeys.push(key)
            childItem.push(item[key])
                // console.log(key, item[key]);
        });
        //itemKeys is a child object in json api

        // console.log(childItem)

        const childItemDetail = [];
        Object.keys(childItem).forEach(key => {

            childItemDetail.push(childItem[key])
                // console.log(key);

        });


        const childItemDetails = [];
        var strOfficial = "";
        var strCommon = "";
        Object.keys(childItemDetail).forEach(key => {
            // console.log(childItemDetail["0"].official);
            strOfficial = childItemDetail["0"].official;
            strCommon = childItemDetail["0"].common;
            childItemDetails.push = childItemDetail["0"];

        });
        // console.log(childItemDetail["0"]);


        showData += `
        <div class="padding" >
            <h1 class="title">${flag.name.common}</h1>
            <div class="image">
                <img src ='${flag.flags.png}' svg="${flag.flags.svg}" alt="${flag.flags.alt}">
            </div>
            <div class="content">   
                <strong>${flag.name.official}</strong>
                
                <div class="country-native">
                    <strong>Official: <small>${strOfficial}</small></strong> <br>
                    <strong>Common: <small> ${strCommon}</small></strong>
                </div>
            </div>
        </div>
        `;
        document.getElementById('country').innerHTML = showData;
    });


}
fakeShop()