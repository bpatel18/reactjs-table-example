
export default (refs) => {
  let txtFname = refs.fname.value;
  let txtLname = refs.lname.value;
  let txtEmail = refs.email.value;
  let txtSalary = refs.salary.value;
  let valName = /^[A-Za-z]+$/;
  let valEmail = /^[A-Za-z0-9._]+\@[A-Za-z]+\.[A-Za-z]{2,3}$/;
  //let valNum = /^\d{1,3}(?:,?\d{3})?(?:.?\d{1,2})?$/;
  let valNum = /^\d+(?:.?\d{1,2})?$/;
  let success = true;
  if(txtFname == ""){
    refs.spnFname.innerHTML="*".fontcolor("red");
    refs.fname.focus();
    success = false;
  } else if(!valName.test(txtFname)) {
    refs.spnFname.innerHTML="Please Enter Character Only (no Space)".fontcolor("red");
    refs.fname.focus();
    success = false;
  } else {
    refs.spnFname.innerHTML="";
  }
  if (txtLname == "") {
    refs.spnLname.innerHTML="*".fontcolor("red");
    refs.lname.focus();
    success = false;
  } else if(!valName.test(txtLname)) {
    refs.spnLname.innerHTML="Please Enter Character Only (no Space)".fontcolor("red");
    refs.lname.focus();
    success = false;
  } else {
    refs.spnLname.innerHTML="";
  }
  if (txtEmail == "") {
    refs.spnEmail.innerHTML="*".fontcolor("red");
    refs.email.focus();
    success = false;
  } else if(!valEmail.test(txtEmail)) {
    refs.spnEmail.innerHTML="Please Enter Email_ID in proper format(pqr@abc.xxx{2,3})".fontcolor("red");
    refs.email.focus();
    success = false;
  } else {
    refs.spnEmail.innerHTML="";
  }
  if (txtSalary == "") {
    refs.spnSalary.innerHTML="*".fontcolor("red");
    refs.salary.focus();
    success = false;
  } else if(!valNum.test(txtSalary)) {
    refs.spnSalary.innerHTML="Please Enter Salary in proper format(######.##)".fontcolor("red");
    refs.salary.focus();
    success = false;
  } else {
    refs.spnSalary.innerHTML="";
  }
  return success;
};
