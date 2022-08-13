import { Wrapper, Nav, Icon, Logo, NavItems } from "./style"

const Header = () => {
    return <>
        <Wrapper>
            <div className="toCenter">
                <Nav>
                    <Logo>
                        <Icon/>
                        <div>Houzing</div>
                    </Logo>
                    <NavItems>
                        <li>Home</li>
                        <li>Properties</li>
                        <li>Contacts</li>    
                    </NavItems>
                    <span></span>
                </Nav>
            </div>
        </Wrapper>
    </>
}

export default Header