import React, { useEffect, useState } from 'react';
import {  FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
  import 'react-toastify/dist/ReactToastify.css';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
	Input,
	ButtonSearch,
	 DropDownLi,
  StyledA,
  DropDownContent,
  SubA,
  StyledUl,
} from './NavbarStyles.js';
import { useLocation, useHistory } from 'react-router-dom';
import { data } from '../../data/NavbarData';
import { BsSearch } from 'react-icons/bs';
import {getAuthUser, logout } from "../../JS/actions/authActions";
import { useDispatch, useSelector } from 'react-redux';
const Navbar = () => {
	const [show, setShow] = useState(false);
  const dispatch = useDispatch();
	let history = useHistory();
	let location = useLocation();

	const handleClick = () => {
		setShow(!show);
	};

	const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const closeMobileMenu = (to, id) => {
		if (id && location.pathname === '/') {
			scrollTo(id);
		}

		history.push(to);
		setShow(false);
	};
const loading = useSelector((state) => state.authReducer.isLoading);
   
  
  useEffect(() => {
   dispatch(getAuthUser())
   }, [])

    if (loading) {
    return <h1> Loaading ......</h1>;
  }  

	return (
		<IconContext.Provider value={{ color: '#fff' }}>


			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<NavIcon src="./assets/logo.png" alt="logo" />
						Location

					</NavLogo>
			
        
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes /> : <CgMenuRight />}
					</MobileIcon>
						<Input type="text" placeholder="Produit à chercher" />
						<ButtonSearch> <BsSearch/></ButtonSearch>
					<NavMenu show={show}>
						{data.map((el, index) => (
							<NavItem key={index}>
								<NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
									{el.text}
								</NavLinks>
							</NavItem>
						))}
						  <StyledUl>
       <DropDownLi>
                    <StyledA >
                        DropDown
                    </StyledA>
                    <DropDownContent>
                        {" "}
                        <SubA >
                            My Profile
                        </SubA>
                        <SubA onClick={() => { dispatch(logout()); history.push("/login") }} >
                            Logout
                        </SubA>
                      
                    </DropDownContent>
                </DropDownLi>
                </StyledUl>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;
