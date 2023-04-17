import Title from "../ui/Title"

const Footer = () => {
  return (
    <div className="footer">
      <div className="container mx-auto">
        <div className="widget-container">
          <div className="md:flex-1 w-full">
            <Title className="text-[30px] mb-4">Contact Us</Title>
            <div className="flex flex-col gap-y-[5px]">
              <div className="">
                <a href="">
                  <i className="fa fa-map-marker-alt"></i>
                  <span className="inline-block ml-2">Location</span>
                </a>
              </div>
              <div className="">
                <a href="">
                  <i className="fa fa-phone"></i>
                  <span className="inline-block ml-2">Call +01 1234567890</span>
                </a>
              </div>
              <div className="">
                <a href="">
                  <i className="fa fa-envelope"></i>
                  <span className="inline-block ml-2">demo@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="md:flex-1 w-full">
            <Title className="text-[30px] mb-4">Feane</Title>
            <div className="flex flex-col gap-y-[5px]">
              <div className="">
                <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
                <div className="footer-social">
                  <a href="">
                    <i className="fab  fa-facebook-f"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-1 w-full">
            <Title className="text-[30px] mb-4">Opening Hours</Title>
            <div className="flex flex-col gap-y-[5px]">
              <div className="">
                <span>Everyday</span>
              </div>
              <div className="">
                  <span>10.00 Am - 10.00 Pm</span>
              </div>
            </div>
          </div>
          
        </div>
        <div className="text-center mt-6">
          <p>
            © <span id="displayYear">2023</span> All Rights Reserved By 
            <a href=""> Free Html Templates</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer