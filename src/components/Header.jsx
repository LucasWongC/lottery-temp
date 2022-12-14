import React, { useState, useRef, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import Web3Modal from "web3modal";
import { Container, Navbar, Nav, Button, Image } from 'react-bootstrap';
import './Header.scss';
import connect, { provider } from './walletConnect/connect';
import web3 from 'web3';

import { useDurationToGetation } from '../hooks';

const Header = ({
  account,
  setShowMintPage,
  handleShowWeb3Modal,
  handleDeactivateAccount,
}) => {
  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 1199px)').matches
  );

  const [address, setAddress] = useState(account);

  const ref = useRef();
  const toggleRef = useRef();
  const { addToast } = useToasts();

  const DurationToGestation = useDurationToGetation();

  useEffect(() => {
    const header = ref.current;
    const scrollcallback = window.addEventListener('scroll', () => {
      if (window.pageYOffset > 80) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollcallback);
    };
  }, []);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    const mql = window.matchMedia('(max-width: 1199px)');
    mql.addEventListener('change', handler);
  }, []);

  const handleNavigate = () => {
    if (matches) {
      toggleRef.current.click();
      ref.current.classList.add('support-header');
      setTimeout(() => {
        ref.current.classList.remove('header-bg');
      }, 20);
    } else {
      ref.current.classList.remove('support-header');
    }
  };

  const handleToggle = () => {
    if (matches) {
      ref.current.classList.add('header-bg');
    } else {
      ref.current.classList.remove('header-bg');
    }
  };

  const handleShow = () => {
    if (address) {
      handleNavigate();
    } else {
      addToast('Metamask not connected', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  const walletInfo = async () => {
    try {
      const web3 = await connect();

      //get address Details

      await web3.eth.getAccounts((err, address) => {
        if (address) {
          console.log(address[0]);
          setAddress(address[0]);
          setShowMintPage(true);
        } else {
          console.log(err);
        }
      })

      //get Network Id Details

      await web3.eth.getChainId((err, chainId) => {
        if (chainId) {
          console.log(chainId);
        } else {
          console.log(err);
        }
      })


      provider.on("disconnect", (error) => {
        window.location.reload(true);
        console.log("disconned");
      });


    } catch (err) {
      console.log(err);
    }
  }

  // provider.on("disconnect", (error) => {
  //   window.location.reload(true);
  //   console.log("disconned");
  // });

  const disconnectWallet = async (provider) => {
    try {
      await provider.close();
      const web3Modal = new Web3Modal({ cacheProvider: true });
      web3Modal.clearCachedProvider();
      setShowMintPage(false);
      setAddress(false);
    } catch (err) {

      const web3Modal = new Web3Modal({ cacheProvider: true });
      web3Modal.clearCachedProvider();
      window.location.reload(true);
      setShowMintPage(false);
      setAddress(false);
      //handleDeactivateAccount();
    }

  }


  return (
    <header className={!matches ? 'header' : 'header support-header'} ref={ref}>
      {address && (
        <div className='bg-light d-flex justify-content-end align-items-center px-5 gap-5'>
          {address && ` My Address: ${address}`}{' '}
          {DurationToGestation && `Duration: ${DurationToGestation.toString()}`}
          <Button onClick={() => disconnectWallet(provider)}>Disconnet</Button>
        </div>
      )}
      <Navbar expand='xl'>
        <Container>
          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            onClick={handleToggle}
            ref={toggleRef}
          />


          {!address && (
            <Button className='btn-connect' onClick={() => walletInfo()}>
              Connect to MetaMask
            </Button>
          )}
          {address && (
            <Button className='btn-connect' onClick={setShowMintPage}>
              Mint Mongooses
            </Button>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
