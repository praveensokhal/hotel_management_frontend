const NotFoundPage = ()=>{
    return(
        <div class="container">
    <div class="row">
      <div class="col-lg-6 col-lg-offset-3 p404 centered">
        <h1>DON'T PANIC!!</h1>
        <h3>The page you are looking for doesn't exist.</h3>
        <br/>
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <input type="text" class="form-control" id="form1Name" name="form1Name"/>
            <button class="btn btn-theme mt">Search</button>
          </div>
        </div>
        <h5 class="mt">Hey, maybe you will be interested in these pages:</h5>
        <p><a href="index.html">Index</a> | <a href="contact.html"> Contact</a></p>
      </div>
    </div>
  </div>
    );

}
export default NotFoundPage