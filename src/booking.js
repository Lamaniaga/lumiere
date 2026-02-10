export default function bookingForm() {
    return {
        loading: false,
        success: false,
        failed:false,
        async submitForm(e) {
            e.preventDefault();
            const form = e.target;
            
            const formData = new FormData(form)
            const name = formData.get('name')
            const service = formData.get('service')
            const subject = `Reservasi Baru Dari ${name} untuk Layanan ${service}`

            formData.append('from_name', name)
            formData.append('subject', subject)

            this.loading = true

            try{
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData
                })
                const result  = await response.json()
                console.log("result : ", result)
                if(result.success){
                    form.reset();
                    this.success = true
                    setTimeout(() => this.success = false, 5000);
                }else{
                    this.failed = true
                    setTimeout(() => this.failed = false, 5000);
                }
            } catch(err){
                console.log("error : ", err)
                this.failed = true
                setTimeout(() => this.failed = false, 5000);
            } finally{
                this.loading = false
            }
        },
    }
}