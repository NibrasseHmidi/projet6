import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Column, Row } from '../../globalStyles';

export const FooterContainer = styled.div`
	background-color: #101522;
	padding: 4rem 0 2rem 0;
`;

export const FooterWrapper = styled.div`
	max-width: 1280px;
	margin-left: auto;
	margin-right: auto;
`;

export const FooterSubscription = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-bottom: 24px;
	padding: 24px;
	color: black;
`;

export const FooterSubHeading = styled.p`
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
		sans-serif;
	margin-bottom: 24px;
	font-size: 24px;
`;

export const FooterRow = styled(Row)`
	flex-wrap: wrap;
	@media screen and (max-width: 820px) {
		> div {
			width: 20%;
		}

		> div:first-child {
			width: 100%;
		}
	}

	@media screen and (max-width: 420px) {
		flex-direction: column;
		align-items: center;

		* {
			width: 100%;
			text-align: center;
		}
	}
`;

export const FooterGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	justify-content: center;
	align-items: center;
`;

export const FooterColumn = styled(Column)`
	@media screen and (max-width: 999px) {
		align-items: center;
		grid-column: 1/-1;
	}
`;

export const FooterSubText = styled.p`
	margin-bottom: 24px;
	font-size: 20px;
`;

export const FooterLinksContainer = styled.div`
	width: 100%;
	max-width: 1000px;
	display: flex;
	justify-content: center;

	@media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`;

export const FooterLinkItems = styled.div`
	display: flex;
	flex-direction: column;
	margin: 16px;
	text-align: left;
	box-sizing: border-box;
	color: black;

	@media screen and (max-width: 1000px) {
		align-items: center;
	}
`;

export const FooterLinkTitle = styled.h2`
	margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
	color: black;
	text-decoration: none;
	margin-bottom: 0.5rem;

	&:hover {
		color: #0467fb;
		transition: 0.3s ease-out;
	}
`;

export const FooterLogo = styled(Link)`
	color: black;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
`;

export const SocialIcon = styled.img`
	margin-right: 10px;
	width: 40px;
`;

export const FooterRights = styled.div`
	color: black;
	margin-bottom: 16px;
	width: 100%;
	font-size: 0.8rem;
	text-align: center;
	border-top: 1px solid #2d3748;
	padding: 1rem 0;
	margin: 1rem 0 0;
`;

export const FooterSocialIcon = styled.a`
	color: black;
	font-size: 24px;
`;

export const FooterAddress = styled.div`
	color: Black;
	margin: 0.4rem auto 0.4rem;
	max-width: 20rem;
	font-weight: 500;
	font-size: 0.875rem;
	line-height: 2;
	text-align: center;

	@media screen and (min-width: 1000px) {
		margin-left: 0px;
		text-align: left;
		margin-right: 1rem;
	}
`;
export const Back= styled.div`
 position: absolute;

  background: url("http://droitthemes.com/html/saasland/img/seo/footer_bg.png")
    no-repeat scroll center 0;
  width: 100%;
  height: 266px;
  overflow: hidden;
`
export const BackOne= styled.div`
 background: url("https://1.bp.blogspot.com/-mvKUJFGEc-k/XclCOUSvCnI/AAAAAAAAUAE/jnBSf6Fe5_8tjjlKrunLBXwceSNvPcp3wCLcBGAsYHQ/s1600/volks.gif")
    no-repeat center center;
  width: 330px;
  height: 105px;
  background-size: 100%;
  position: absolute;
  bottom: 0;
  left: 30%;
  -webkit-animation: myfirst 22s linear infinite;
  animation: myfirst 22s linear infinite;
  @-moz-keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}

@-webkit-keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}

@keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}


`
export const BackTow=styled.div`
 background: url("https://1.bp.blogspot.com/-hjgfxUW1o1g/Xck--XOdlxI/AAAAAAAAT_4/JWYFJl83usgRFMvRfoKkSDGd--_Sv04UQCLcBGAsYHQ/s1600/cyclist.gif")
    no-repeat center center;
  width: 88px;
  height: 100px;
  background-size: 100%;
  bottom: 0;
  left: 38%;
  position: absolute;
  -webkit-animation: myfirst 30s linear infinite;
  animation: myfirst 30s linear infinite;
  @-moz-keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}

@-webkit-keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}

@keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}
`