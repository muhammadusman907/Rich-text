if (location.pathname === "/dashboard.html") {
    var setText = document.getElementById("set-text")
    var quill = new Quill('#editor', {
        theme: 'snow'
    });
}

//  ================== sign up page=============
var userName = document.getElementById("user-name");
var signupEmail = document.getElementById("signup-email");
var signupPassword = document.getElementById("signup-password");
// ================ regex ====================
var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// =====================login =========================
var loginEmail = document.getElementById("login-email")
var loginPassword = document.getElementById("login-password")
var names = document.getElementById("user-name")
// ===============================logout=================
var logoutBtn = document.getElementById("logout")

var allPost = document.getElementById("all-post");


//   ==================post open

var mainPost = document.getElementById("main-post")
var tittle = document.getElementById("tittle");

function postOpen() {
    mainPost.style.display = "flex";
    mainPost.style.position = "fixed"
    mainPost.style.justifyContent = "center"
    mainPost.style.alignItems = "center"
    mainPost.style.width = "100%"
    mainPost.style.height = "100vh"
    // console.log("he")

}
var arr = [];
function posts() {
    var text = quill.root.innerHTML;
    var lengths = quill.getLength();
    if (tittle.value.trim() === "") {
        // alert("input not filled")
        Swal.fire({
            icon: 'error',
            title: 'tiltle please',
            showConfirmButton: true,
        })     
    }
    else if (lengths === 1) {
        Swal.fire({
            icon: 'error',
            title: 'please blog ',
            showConfirmButton: true,
        })     
        // alert("blog not filled")

    }
    // console.log(lengths)
    else {

        var userData = {
            blogValue: text,
            blogTittle: tittle.value
        }
        var getData = JSON.parse(localStorage.getItem("userdata"));
        if (getData) {
            getData.push(userData)
            var dataString = JSON.stringify(getData)
            localStorage.setItem("userdata", dataString)
            mainPost.style.display = "none";
        }
        else {
            arr.push(userData)
            var dataString = JSON.stringify(arr)
            localStorage.setItem("userdata", dataString)
        }
        
        mainPost.style.display = "none";
        Swal.fire({
            icon: 'success',
            title: 'Blog Post Successfully',
            showConfirmButton: true,
        })  
        gettext()
    }
}

function gettext() {
    var getData = JSON.parse(localStorage.getItem("userdata"));
    if (getData) {

        console.log(getData)
        for (var i = 0; i < getData.length; i++) {
            console.log(getData[i].blogTittle)
            if (allPost) {
                allPost.innerHTML += `
    <div class="post" id="hello">
    
    <div class="user-photo-input">
    <div class="user-photo">
    <img src="public/user-pic.jpg" alt="">
    </div>
    <div class="user-input d-flex justify-content-around">
    <h4>Muhammad Usman</h4>
    
  <!--  <button class="btn btn-danger" onclick="deletePost(this)">close</button>} -->
  </div>
    </div>
    <!-- ================= icon ============= -->
    <div class="post-value " style="background-color:;background-image:url; background-size:cover;">
    <hr>
    <div>
    <h3 class="ms-2" style="color:;">${getData[i].blogTittle}</h3>
    
    </div>
    <div>
    <p class="ms-2" style="color:;"> ${getData[i].blogValue}</p>
    </div>
    
    </div>
    </div>`
                // mainPost.style.display = "none";
                // selectImage ="";
                // tittle.value = "";
                // textarea.value = "";
                // selectBackground = ""
                // textarea.style.backgroundColor = "";
                // textarea.style.backgroundImage = "";

            }
        }
    }
}
gettext()

function postClose() {
    mainPost.style.display = "none";

}
// =======================================================================//
//============================ signup ======================================
// =======================================================================//

function signup() {
    if (userName.value.trim() !== "" && signupEmail.value.trim() !== "" && signupPassword.value.trim() !== "") {
        if (signupEmail.value.toLowerCase().match(regex)) {
            if (signupPassword.value.length < 7) {
                Swal.fire({
                    icon: 'error',
                    title: 'passwod chota hai',
                    showConfirmButton: true,
                })
                // alert("passwod chota hai")
            }
            else {
                var obj = {
                    user_name: userName.value,
                    signup_email: signupEmail.value,
                    signup_password: signupPassword.value,
                }
                console.log(obj)
                var userDataStr = JSON.stringify(obj);
                localStorage.setItem("userData", userDataStr);  
                   Swal.fire({
                    icon: 'success',
                    title: 'signup successfully',
                    showConfirmButton: true,
                })
                setInterval(function (){
                location.href = "./login.html"
                },2000)
              

                // console.log(userName.value) // ================ user name
                // console.log(signupEmail.value);// ============= user email
                // console.log(signupPassword.value); ============ user password
            }
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'email incorrect',
                showConfirmButton: true,
            })
            // alert("email incorrect")
        }
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'input not filled',
            showConfirmButton: true,
        })
        // alert("not found")
    }
}
// ========================= login ======================== //

function login() {
    if (loginPassword.value.trim() !== "" && loginEmail.value.trim() !== "") {
        if (loginEmail.value.toLowerCase().match(regex)) {
            if (loginPassword.value.length < 7) {
                // alert(" passwod chota hai")
                Swal.fire({
                    icon: 'error',
                    title: 'passwod chota hai',
                    showConfirmButton: true,
                })
            }
            else {
                console.log(loginEmail.value);
                console.log(loginPassword.value);
                var userDataParse = JSON.parse(localStorage.getItem("userData"))
                console.log(userDataParse)
                if (loginEmail.value === userDataParse.signup_email) {
                    if (loginPassword.value === userDataParse.signup_password) {
                 Swal.fire({
                                icon: 'success',
                                title: 'login successfully',
                                showConfirmButton: true,
                            })     
                               setInterval(function () {
                            // alert("login successfully")
                            location.href = "./dashboard.html"
                        }, 1000
                        )

                    }
                    else {
                        Swal.fire({
                            icon: 'error',
                            title: 'incorrect password',
                            showConfirmButton: true,
                        })
                        // alert("incorrect password")
                    }
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'email not found',
                        showConfirmButton: true,
                    })
                    // alert("email not found")
                }

            }
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'email incorrecrt',
                showConfirmButton: true,
            })
            // alert("email incorrecrt")
        }
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'input not filled',
            showConfirmButton: true,
        })
        // alert("input not filled")
    }
}
// ================================= logout =============================//
function logout() {
    location.href = "./index.html";
}
// ================================= user name===========================//
var parsename = JSON.parse(localStorage.getItem("userData"))
if (names) {
    names.innerText = parsename.user_name;
}