function signin(adminName, password){
  return(destroyEqu(btoa(btoa(btoa(btoa(adminName + " + " + password))))))
}
function reverseStr(str) {
    return str.split("").reverse().join("");
}
function destroyEqu(str){
  return(str.replace("=", " ").trimEnd().replace(" ", "="))
}
function Login(signinCode){
  eval(atob(atob("ZG1GeUlHeHZaMmx1SUQwZ1d5SldiRnBoWVRGVmVWVnJhRk5pUjJoUVZXcEtVMVJXY0ZkV2EzUlNUVlphZVZac2FHOVdSMHBIVTI1b1dtVnJOVXhXUnpGSFZsWkdXV0ZHVWxkaVJuQkVWa1pXYTFWdFZsZFdiRlpPVWtSQk9TSXNJQ0pXYkZwaFlXc3hWazFWYUZOaE1taFJWakJhWVdNeFduUmtTR1JwVFZkNE1GUldWbXRoYXpGeVkwVnNXbFpGY0hKV1JXUlhWbXhPYzFkc2FHbFNNVXBWVjFaU1MxWXhaRWRVYmxKc1VtNUNXVlZzWkRSbFJscEhXa2R3VUZaclNsTlZSbEYzVUZFOVBTSXNJQ0lnVm0weE1HRXlTblJXYmxKVVYwaENXRll3Wkc5aFJsWnlWbFJDVGxKck5WZFdSelYzV1ZVeFdHVkdjRmROYWtaMldWZHplR1JHY0VsaVJsSm9UVmM1TTFZeWRGWmxSbHBYVkd4c2FXVnFRVGtpWFRzZ2FXWW9iRzluYVc0dWFXNWpiSFZrWlhNb2MybG5ibWx1UTI5a1pTa3BlMkZrYldsdUtHRjBiMklvWVhSdllpaGhkRzlpS0dGMGIySW9jMmxuYm1sdVEyOWtaU2twS1NrdWMzQnNhWFFvSWlBcklDSXNJREVwV3pCZEtUdDlJR1ZzYzJVZ2UyTnZibk52YkdVdWJHOW5LQ0pPYjNRZ1lTQjJZV3hwWkNCaFkyTnZkVzUwTGlJcGZTQjJZWElnYkc5bmFXNGdQU0JiSW1oaGFHRWlYUT09")))
}

function admin(name){
  console.log("Welcome, " + name);
  console.log("Signing You In...")
} 

/*

HeaderBar

"<header tag=\"HeaderBar\">
<a href=\"/\" id=\"/\" class=\"link\" style=\"color:#000000; font-size:15px;\">Home</a>
 | 
<a href=\"/mc\" id=\"/mc\" class=\"link\" style=\"color:#000000; font-size:15px;\">MC Server</a>
 | 
<a href=\"/faq\" id=\"/faq\" class=\"link\" style=\"color:#000000; font-size:15px;\">FAQ</a>
</header>"
 | 
<a href=\"/r\" id=\"/r\" class=\"link\" style=\"color:#000000; font-size:15px;\">SubReddit</a>
</header>"

"<header tag=\"HeaderBar\"><a href=\"/\" id=\"/\" class=\"link\" style=\"color:#000000; font-size:15px;\">Home</a> | <a href=\"/mc\" id=\"/mc\" class=\"link\" style=\"color:#000000; font-size:15px;\">MC Server</a> | <a href=\"/faq\" id=\"/faq\" class=\"link\" style=\"color:#000000; font-size:15px;\">FAQ</a> | <a href=\"/r\" id=\"/r\" class=\"link\" style=\"color:#000000; font-size:15px;\">SubReddit</a></header>"

*/
document.getElementById("header").innerHTML = "<header tag=\"HeaderBar\"><a href=\"/\" id=\"/\" class=\"link\" style=\"color:#000000; font-size:15px;\">Home</a> | <a href=\"/mc\" id=\"/mc\" class=\"link\" style=\"color:#000000; font-size:15px;\">MC Server</a> | <a href=\"/faq\" id=\"/faq\" class=\"link\" style=\"color:#000000; font-size:15px;\">FAQ</a> | <a href=\"/r\" id=\"/r\" class=\"link\" style=\"color:#000000; font-size:15px;\">SubReddit</a></header>"
// header stuff

document.getElementById(location.pathname).setAttribute("style", "font-size:25px; color:#0000ff;")
