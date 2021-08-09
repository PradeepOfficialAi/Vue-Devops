var dt = new Date();
var month = dt.getMonth()
var year = dt.getFullYear();
let addValue = 0;
let addYear = 0;
let yearUpdate = year;
let showDateIn;

function calculateDate(params) {
    let showDate = params.toString().split(' ')
    return showDate[1] + " " + showDate[3]
}

function updateYear(yearIn, monthIn) {
    addYear += yearIn //= addYear +
    month = monthIn
    addValue = 0
    return year + addYear
}
function updateMonth(updateValue) {

    addValue += updateValue //= addValue +
    if (month + addValue === 13 || month + addValue === 0 || month + addValue === -13) {
        
        yearUpdate = updateYear(Math.sign(updateValue) === -1 ? -1 : 1, updateValue)
    }
    let appDate = Math.abs(month+addValue)
    showDateIn = calculateDate(moment(`${yearUpdate}-${appDate}-01`).format('dddd, MMMM Do YYYY')) //'2021-08-05'

    let daysInMonth = new Date(yearUpdate, month + addValue, 0).getDate()
    let Day;
    let mytable = [];
    let weekObj = {
        Sun: '',
        Mon: '',
        Tue: '',
        Wed: '',
        Thu: '',
        Fri: '',
        Sat: ''
    }

    for (let index = 1; index <= daysInMonth; index++) {
        let Days = new Date(yearUpdate, month + addValue, index)
        Day = Days.toString().split(' ')
        if (true) {
            Day[0] === "Sun" ? weekObj.Sun = Day[2] : Day[0] === "Mon" ? weekObj.Mon = Day[2] : Day[0] === "Tue" ? weekObj.Tue = Day[2] : Day[0] === "Wed" ? weekObj.Wed = Day[2]
            : Day[0] === "Thu" ? weekObj.Thu = Day[2] : Day[0] === "Fri" ? weekObj.Fri = Day[2] : Day[0] === "Sat" ? weekObj.Sat = Day[2] : 'NAN'

            if ("Sat" === Day[0] || daysInMonth === index) {
                mytable.push(weekObj) 
                weekObj = {
                    Sun: '',
                    Mon: '',
                    Tue: '',
                    Wed: '',
                    Thu: '',
                    Fri: '',
                    Sat: ''
                }  
            }
        }
    }

    var html = "<table id='calendar'><th>Sun</th><th>Mon</th><th>Tue</th> <th>Wed</th> <th>Thu</th> <th>Fri</th> <th>Sat</th>";
    mytable.forEach((entry) => {
        html += "<tr>";
        for (var k in entry){
                html += "<td>" + entry[k] + "</td>";
        }
        html += "</tr>";
    });
    html += "</table>";
    document.getElementById("result").innerHTML = html;
    document.getElementById('showDate').innerHTML = showDateIn;
    }
    updateMonth(0)