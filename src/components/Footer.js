import React from 'react';

class Footer extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <div>
	<section className="footer" >
		<div class="container">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
			</div>
			<div class="row">
				<div class="col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-facebook"></i></a></li>
						<li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-instagram"></i></a></li>
					</ul>
				</div>
				<hr/>
			</div>	
			<div class="row">
				<div class="col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p>G-7A, D-242, Sector 63, Noida - 201301, Uttar Pradesh. India.Knight learning Solutions Pvt Ltd.</p>
					<p class="h6">copy All right Reversed.<a class="text-green ml-2" href="https://www.knightlearningsolutions.com" target="_blank"></a></p>
				</div>
				<hr/>
			</div>	
		</div>
	</section>
            </div>
  
        )
    }
}
export default Footer;