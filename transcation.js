class Bank{
    static getaccountdetails() {
        var accountdetails={
            1101:{name:"user1",acno:1101,pin:5852,password:"user1",balance:2500},
            1102:{name:"user2",acno:1102,pin:5853,password:"user2",balance:25000},
            1103:{name:"user3",acno:1103,pin:5854,password:"user3",balance:5600},
            1104:{name:"user4",acno:1104,pin:5855,password:"user4",balance:14000},
        }
        return accountdetails 
    }
    static login(){
        var acno=document.querySelector("#acno").value;
        var password=document.querySelector("#pwd").value;
        try{
            if(isNaN(acno))throw "not a valid account number";

        }
        catch (err){
            alert(err)
        }

        let data=Bank.getaccountdetails()
        if(acno in data){
            let pwd=data[acno].password;
            if(pwd==password){
                alert ("successfull");
                window.location.href="index.html";
            }
            else{
                alert("inncorrect username or password");
            }
        }
        else{
            alert("user doesnot exist");
        }
    }


    static depwith(){
        var acno=document.querySelector("#ano").value;
        var amount=Number(document.querySelector("#amount").value);
        var pin=document.querySelector("#pin").value;
       
        let data=Bank.getaccountdetails()
        if (acno in data) {
            let pinn=data[acno].pin;
            if (pin==pinn) {
                data[acno].balance += amount;
                alert("Account has been credited");
                alert(data[acno].balance);
            }
        else {
            alert("pin not valid");
        }    
        }
        else {
            alert("Incorrect Account Details");
        }
        }

        static withdraw(){
            var acno=document.querySelector("#ano").value;
            var amount=Number(document.querySelector("#amount").value);
            var pin=document.querySelector("#pin").value;
           
            let data=Bank.getaccountdetails()
            if (acno in data) {
                let pinn=data[acno].pin;
                if (pin==pinn) {
                    data[acno].balance -= amount;
                    alert("money debited");
                    alert(data[acno].balance);
                }
            else {
                alert("pin not valid");
            }    
            }
            else {
                alert("Incorrect Account Details");
            }
            }

            static balance(){
                var x=document.getElementById('acno').value;
                var data=Bank.getaccountdetails();
                if(x in data){
                    let name1=data[x].name;
                    let balance1=data[x].balance;
                    document.getElementById('uname').innerHTML="hello "+name1+ ".";
                    document.getElementById('ubal').innerHTML= "your balance  is" +balance1;

                }

            }
            

    }


