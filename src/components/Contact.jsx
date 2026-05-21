// eslint-disable-next-line no-unused-vars
import React from "react";

const Contact = () => {
  return (
    // أضفت min-w-full لضمان أن السكشن لا ينضغط
    <section className="py-24 w-full min-w-full">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* HEADER */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight">Contact Us</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Have a question or want to learn more? Reach out to our team
          </p>
        </div>

        {/* التعديل الجذري هنا: 
            1. استخدمت flex-wrap عشان لو المساحة ضاقت يلتفوا بذكاء.
            2. استخدمت flex-basis للتحكم الدقيق في العرض.
            3. استخدمت items-start عشان الكروت ما تاخدش نفس الطول غصب عنها.
        */}
<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px', width: '100%' }}>          
          {/* LEFT SECTION (Contact Info) */}
<div style={{ flex: '1', minWidth: '350px' }} className="bg-gray-50 p-8 border border-gray-100 shadow-sm rounded-xl">         
     <h3 className="font-bold text-xl text-gray-900 mb-8">Get In Touch</h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-red-50 rounded-xl text-red-600 shrink-0">📍</div>
                <div>
                  <h4 className="font-semibold text-sm">Address</h4>
                  <p className="text-xs text-gray-500">123 Fitness Street <br /> Healthy City</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-red-50 rounded-xl text-red-600 shrink-0">📞</div>
                <div>
                  <h4 className="font-semibold text-sm">Phone</h4>
                  <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-red-50 rounded-xl text-red-600 shrink-0">✉️</div>
                <div>
                  <h4 className="font-semibold text-sm">Email</h4>
                  <p className="text-xs text-red-600 font-medium">info@fitlife.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION (Form) */}
<div style={{ flex: '1', minWidth: '350px' }} className="bg-white p-8 border border-gray-100 shadow-sm rounded-xl">            <h3 className="font-bold text-xl mb-6">Send Message</h3>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="border p-3 rounded-xl text-sm w-full outline-none focus:border-red-600" placeholder="Name" />
              <input className="border p-3 rounded-xl text-sm w-full outline-none focus:border-red-600" placeholder="Email" />
              <input className="border p-3 rounded-xl text-sm w-full outline-none focus:border-red-600" placeholder="Phone" />
              <input className="border p-3 rounded-xl text-sm w-full outline-none focus:border-red-600" placeholder="Subject" />
              <textarea
                className="sm:col-span-2 border p-3 rounded-xl text-sm w-full h-[120px] outline-none focus:border-red-600 resize-none"
                placeholder="Message"
              />
              <button type="button" className="sm:col-span-2 w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;