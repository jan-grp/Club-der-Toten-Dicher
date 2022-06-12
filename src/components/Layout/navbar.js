import { useState, useContext, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'

import styles from './navbar.module.css'
import { HiOutlineMenu } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'

import { NavigationContext, SwitchNavigationContext } from '../../utils/context/navigation.context'

import DropdownMenu from '../Dropdown/index'

const Window = styled.div`
    height: 50px;
    background-color: rgba(29,29,31,0.92);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10000;
    margin-bottom: 50px;

    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
    padding-left: 20px;

    justify-content: center;
    border-bottom: rgb(0, 0, 0) solid 2px;
`

const ScrolledWindow = styled.div`
    height: 50px;
    background-color: ${props => props.backgroundcolor || 'rgba(29,29,31,0.92)'};
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10000;
    margin-bottom: 50px;

    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-between;
    border-bottom: ${props => props.backgroundcolor ? "" : "rgb(0, 0, 0) solid 2px"}
`

const Navbar = () => {
    const navigationContext = useContext(NavigationContext)

    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [backgroundColor, setBackgroundColor] = useState('rgba(29,29,31,0.92)')

    useEffect(() => {
        if(navigationContext.name !== "Top") {
           setScrolled(true)
        } else {
            setScrolled(false)
        }
    }, [navigationContext])

    const toggleMenu = () => {
        if(!isOpen) {
            setIsOpen(true)
            setBackgroundColor('rgb(26, 26, 26)')
        } else {
            setIsOpen(false)
            setBackgroundColor('rgba(29,29,31,0.92)')
        }
    }

    return (
        <>
            {
                // menu is open
                isOpen && <ScrolledWindow
                    backgroundcolor={backgroundColor}
                >
                    <p className={styles.title}>Club der Toten Dichter</p>

                    <AnimatePresence
                        exitBeforeEnter
                    >
                        <motion.div 
                            className={styles.menuIcon}
                            initial={{ x: 100 }}
                            animate={{ x: 0 }}
                            exit={{ x: 100 }}
                            key="menuIcon"
                            whileTap={{
                                scale: .8
                            }}
                            onClick={() => toggleMenu()}
                        >
                            {!isOpen && <HiOutlineMenu size={25}/>}
                            {isOpen && <IoMdClose size={25}/>}
                        </motion.div>
                    </AnimatePresence>

                    <DropdownMenu close={() => setIsOpen(false)}/>
                </ScrolledWindow>
            }

            {
                // menu available but closed
                (!isOpen && scrolled) && <ScrolledWindow

                >
                    <p className={styles.title}>Club der Toten Dichter</p>

                    <AnimatePresence
                        exitBeforeEnter
                    >
                        <motion.div 
                            className={styles.menuIcon}
                            initial={{ x: 100 }}
                            animate={{ x: 0 }}
                            exit={{ x: 100 }}
                            key="menuIcon"
                            whileTap={{
                                scale: .8
                            }}
                            onClick={() => toggleMenu()}
                        >
                            {!isOpen && <HiOutlineMenu size={25}/>}
                            {isOpen && <IoMdClose size={25}/>}
                        </motion.div>
                    </AnimatePresence>

                    {isOpen && <DropdownMenu />}
                </ScrolledWindow>
            }

            {
                // menu is closed and not available
                (!isOpen && !scrolled) && <Window>
                    <p className={styles.title}>Club der Toten Dichter</p>

                    {isOpen && <DropdownMenu />}
                </Window>
            }
        </>
    )
}

export default Navbar