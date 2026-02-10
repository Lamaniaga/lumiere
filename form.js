export default function contactForm(){
  return {
    loading: false,
    failed: false,
    success: false,
    async submitForm(e){
      e.preventDefault();
      const form = e.target;
      console.info('Form : ', form)

      const formData = new FormData(form)
      const name = formData.get('name');
      const subject = `Pesan masuk baru dari ${name} - Lamaniaga web`
      
      // GANTI SUBJECT DAN FROM NAME MENGGUNAKAN INPUT NAME
      formData.append('subject', subject)
      formData.append('from_name', name)

      this.loading = true;
      this.failed = false;
      this.success = false;

      try{  
        const response = await fetch(form.action, {
          method: "POST",
          body: formData
        })
        const result = await response.json();

        // console.log('Response : ', response)
        // console.log('Result : ', result)

        if (result.success){
          this.success = true 
          form.reset()
          setTimeout(() => this.success = false, 5000);
          // window.location.href = form.querySelector('[name="redirect"]').value;  // jika ingin redirect setelah berhasil kirim email
        }else{
          this.failed = true 
          setTimeout(() => this.failed = false, 5000);
        }
      }catch(err){
        this.failed = true 
        setTimeout(() => this.failed = false, 5000);
        console.log('Failed : ', err)
      }finally{
        this.loading = false
      }
    }
  }
}