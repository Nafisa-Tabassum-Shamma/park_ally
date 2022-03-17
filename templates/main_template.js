

class AddLink extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <!-- Custom CSS -->
            <link rel="stylesheet" href="/stylesheet.css">
            
            <!-- Bootstrap CSS -->

            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        `
    }
}
customElements.define('add-link', AddLink)


class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <nav class="navbar navbar-expand-md navbar-dark custom-nav p-0 m-0 shadow-sm">
            <div class="container-sm">
                <a class="navbar-brand parkally-logo" href="/index.html">ParkAlly</a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul class="navbar-nav">

                        <li class="nav-item dropdown ">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Company
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="/aboutus.html">About Us</a>
                                <a class="dropdown-item" href="/blog.html">Blog</a>
                                <a class="dropdown-item" href="/work-proc.html">How ParkAlly Works</a>
                            </div>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="/help.html">Help</a>
                        </li>

                        <li class="nav-item " style="padding-left: 10px; padding-right: 10px;">
                            <a class="nav-link" href="/login.html"><i class="far fa-user pr-2" aria-hidden="true"></i>Log in</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="/signup.html">Sign up</a>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    
        `
    }
}
customElements.define('custom-header', Header)


class CardContainer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <div class="container-fluid m-0 p-0 bg-light">
        <div class="container border-top">
            <div class="row">
                <div class="col-sm-4 text-black">

                    <br><br>

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                        class="bi bi-people" viewBox="0 0 16 16">
                        <path
                            d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                    </svg>
                    <h3>About Us</h3>
                    <br>
                    <p>Find out how we started, what drives us, and how we’re igniting opportunity.</p><br>
                    <a class="border-bottom text-decoration-none text-dark" href="/aboutus.html">Learn more</a><br><br>


                </div>
                <div class="col-sm-4  text-black">
                    <br><br>

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                        class="bi bi-card-heading" viewBox="0 0 16 16">
                        <path
                            d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                        <path
                            d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z" />
                    </svg>
                    <h3>Blog</h3>
                    <br>
                    <p>See announcements about our latest releases, initiatives, and partnerships.</p><br>
                    <a class="border-bottom text-decoration-none text-dark" href="/blog.html">Learn more</a><br><br>

                </div>
                <div class="col-sm-4 text-black">
                    <br><br>

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                        class="bi bi-patch-question" viewBox="0 0 16 16">
                        <path
                            d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                        <path
                            d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                        <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
                    </svg>
                    <h3>How ParkAlly works</h3>
                    <br>
                    <p>Read about our commitment to making a positive impact in the cities we serve.</p><br>
                    <a class="border-bottom text-decoration-none text-dark" href="work-proc.html">Learn more</a><br><br>

                </div>
            </div>
        </div>
    </div>

        `
    }
}
customElements.define('card-container', CardContainer)


class SignupContainer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <div class="container-fluid m-0 p-0 bg-light">
            <div class="container border-top">
                <div class="row">
                    <div class="col-sm-6 text-black border-bottom"><br><br><br>
                        <center>
                            <h2><a class="text-decoration-none text-dark" href="/signup.html">Sign up to rent <svg
                                        xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                        class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                    </svg></a>
                            </h2>
                            <p>__________________________________________________________</p><br><br><br>
                        </center>

                    </div>
                    <div class="col-sm-6 text-black border-bottom"><br><br><br>
                        <Center>
                            <h2><a class="text-decoration-none text-dark" href="/signup.html">Sign up to park <svg
                                        xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                        class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                    </svg></a>
                            </h2>
                            <p>__________________________________________________________</p><br><br><br>
                        </Center>

                    </div>

                </div>

            </div>
        </div>

        `
    }
}
customElements.define('signup-container', SignupContainer)


class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <footer class="bg-dark">
            <div class="container">
                <div class="row mt-4">
                    <h3 class="text-light text-monospace">Park-Ally</h3>
                </div>
                <div class="row mt-5">

                    <div class="col-sm-3 font-weight-light text-black-50 mr-70">

                        <a class="text-decoration-none  text-light" href="/index.html">Home</a>
                        <br><br>
                        <a class="text-decoration-none  text-light" href="/help.html">Help center</a>
                        <br><br>
                        <a class="text-decoration-none  text-light" href="/faq.html">FAQ</a>
                        <br><br>
                    </div>
                    <div class="col-sm-3 font-weight-light text-black-50 mr-70">
                        <a class="text-decoration-none  text-light" href="/aboutus.html">About us</a>
                        <br><br>
                        <a class="text-decoration-none  text-light" href="/blog.html">Blog</a> <br><br>
                        <a class="text-decoration-none  text-light" href="/work-proc.html">How
                            ParkAlly
                            works</a> <br><br>
                    </div>


                    <div class="col-sm-6 font-weight-light mr-70">
                        <div class="row mb-5">
                            <div class="col-sm-3 font-weight-light mr-70"></div>
                            <div class="col-sm-2 font-weight-light mr-70">
                                <a class="text-decoration-none  text-light" href="#"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-facebook" viewBox="0 0 16 16">
                                        <path
                                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg></a>
                            </div>
                            <div class="col-sm-2 font-weight-light mr-70">
                                <a class="text-decoration-none  text-light" href="#"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-twitter" viewBox="0 0 16 16">
                                        <path
                                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg></a>
                            </div>
                            <div class="col-sm-2 font-weight-light mr-70">
                                <a class="text-decoration-none  text-light" href="#"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-youtube" viewBox="0 0 16 16">
                                        <path
                                            d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                    </svg></a>
                            </div>
                            <div class="col-sm-2 font-weight-light mr-70">
                                <a class="text-decoration-none  text-light" href="#"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path
                                            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg></a>
                            </div>
                            <div class="col-sm-3 font-weight-light mr-70"></div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 font-weight-light text-white-50 border-top ml-5">
                                <hr>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit dolores vitae, quo, et
                                    necessitatibus excepturi amet ut optio corporis veniam dolor? Iste, soluta. Impedit
                                    adipisci, eligendi provident omnis, recusandae ex accusamus nemo fuga aliquam
                                    blanditiis et, quasi rem quae voluptatum quia quas ut reiciendis illo ad autem quam
                                    a aspernatur.</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </footer>
    
        `
    }
}
customElements.define('custom-footer', Footer)