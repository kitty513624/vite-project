import styled from '@emotion/styled';
import { HelpSharp } from '@mui/icons-material';
import { Box, IconButton, Popper } from '@mui/material';
// import { observer } from "mobx-react";
import { FC, MouseEvent, useState } from 'react';
import s from './index.module.scss';

const StyledPopper = styled(Popper)`&&{
  z-index: 100;
  &[data-popper-placement*="bottom"] .arrow{

    width: 0; 
    height: 0; 
    border-left: 1em solid transparent;
    border-right: 1em solid transparent;
    border-bottom: 1em solid darkgray;
    margin-top: -0.9em;
    
    &:before {
      border-width: '0 1em 1em 1em';
      border-color: 'transparent transparent white transparent';
    }
  }

  &[data-popper-placement*="top"] .arrow{

    bottom: 0;
    width: 0; 
    height: 0; 
    border-left: 1em solid transparent;
    border-right: 1em solid transparent;
    border-top: 1em solid darkgray;
    margin-bottom: -0.9em;

    &:before {
      border-width: 1em 1em 0 1em;
      border-color: white transparent transparent transparent;
    }
  }

  &[data-popper-placement*="right"] .arrow{

    left: 0;
    width: 0; 
    height: 0; 
    border-top: 1em solid transparent;
    border-bottom: 1em solid transparent;
    border-right: 1em solid darkgray;
    margin-left: -0.9em;

    &:before {
      border-width: 1em 1em 1em 0;
      border-color: transparent white transparent transparent;
    }
  }

  &[data-popper-placement*="left"] .arrow{
    
    right: 0;
    width: 0; 
    height: 0; 
    border-top: 1em solid transparent;
    border-bottom: 1em solid transparent;
    border-left: 1em solid darkgray;
    margin-right: -0.9em;

    &:before {
      border-width: 1em 0 1em 1em;
      border-color: transparent transparent transparent white;
    }
  }

  .arrow {
    position: absolute;
    font-size: 7px;
    width: 3em;
    height: 3em;

    &:before {
      content: '""',
      margin: auto;
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
    }
  }

  .popper-content {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
    height: 60px;
    width: 250px;
    border: 1px solid darkgray;
    border-radius: 4px;
    padding: 10px;
  }

}`;

const Index: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [arrowRef, setArrowRef] = useState(null);
  const [open, setOpen] = useState(false);
  const showPopover = (e: MouseEvent<HTMLElement>) => {
    // setAnchorEl(anchorEl ? null : e.currentTarget)
    if (anchorEl) {
      setAnchorEl(null);
      setOpen(false);
    } else {
      setAnchorEl(e.currentTarget);
      setOpen(true);
      setTimeout(() => {
        setAnchorEl(null);
        setOpen(false);
      }, 10000);
    }
  };
  const handleArrowRef = (node: any) => {
    setArrowRef(node);
  };
  // const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div className={s.ftable}>
      <p style={{ fontWeight: 600, textAlign: 'left' }}>③、吹出表示</p>
      <div className={s.style}>
        <span>地域</span>
        <IconButton onClick={(e) => showPopover(e)}>
          {' '}
          <HelpSharp />
        </IconButton>
      </div>
      {/* <Popper id={id} open={open} anchorEl={anchorEl}
                    placement='right-start'
                    disablePortal={true}
                    modifiers={[
                        {
                            name: 'flip',
                            enabled: true,
                            options: {
                                altBoundary: false,
                                rootBoundary: 'viewport',
                                padding: 8,
                            }
                        },
                        {
                            name: 'arrow',
                            enabled: true,
                            // options:{
                            //     element:arrowRef,
                            // }
                        }
                    ]}>
                    <Box
                        sx={{ border: '1px solid darkgray', borderRadius: 2, p: 1, bgcolor: 'background.paper' }}
                    >モーニングスターが分類する主な投資対象地域から検索できます。</Box>
                </Popper> */}
      <div>
        {anchorEl && (
          <StyledPopper
            id={id}
            placement="right-start"
            open={open}
            anchorEl={anchorEl}
            modifiers={[
              {
                name: 'flip',
                enabled: true,
                options: {
                  altBoundary: false,
                  rootBoundary: 'viewport',
                  padding: 8
                }
              },
              {
                name: 'arrow',
                enabled: true,
                options: {
                  element: arrowRef
                }
              },
              {
                name: 'preventOverflow',
                enabled: true,
                options: {
                  boundariesElement: 'scrollParent'
                }
              }
            ]}
          >
            {true && <span className="arrow" ref={handleArrowRef} />}
            <div className={'popper-content'}>
              <span>モーニングスターが分類する主な投資対象地域から検索できます。</span>
            </div>
          </StyledPopper>
        )}
      </div>
    </div>
  );
};

export default Index;
