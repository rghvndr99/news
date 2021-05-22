import React from 'react';
import {useAppContext} from 'context/context';
import Image from 'components/image';

const Tile=(props)=>{
	const propsToGeneratelabel=[{'key':'publishedAt','label':'Published At'}, {'key':'author','label':'Author'}]
	const redirectToPage=()=>{
		window.open(props.url, '_blank');
	}
	return (
		 < div className="tile-wrap" onClick={redirectToPage}>
		 	<div className="tile-header-section">

			 	   <div className="img-section">
			 	   		<Image url={props.urlToImage} />
			 	   </div>

			 	   <div className="content-section">
			 	         <div className="primary-section">
					 	     <div className="title-section">
					 	     	{props.title}
					 	     </div>
					 	     <div className="description-section" dangerouslySetInnerHTML={{__html: props.description}}>
					 	     </div>
				 	     </div>
				 	     <div className="seconadry-section">
						 		{
						 			propsToGeneratelabel.map(item=>{
									return (<div className="label-wrapper">
						 			<div className="primary-label">
						 		  		{item.label}: 
						 			</div>
						 			<div className="secondary-label">	
						 		 		 { props[item.key]}  
						 			</div>
									 </div>)
						 		})
						 	}
		 				</div>

			 	   </div>

		 	</div>
		 </div>
		)
}

export default Tile;
