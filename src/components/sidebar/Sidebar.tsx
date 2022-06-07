import * as React from 'react'

import {
  Box,
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
  Link
} from '@mui/material'

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import PeopleIcon from '@mui/icons-material/People'
import HandshakeIcon from '@mui/icons-material/Handshake'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AssessmentIcon from '@mui/icons-material/Assessment'
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import PaidIcon from '@mui/icons-material/Paid'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

import AddIcon from '@mui/icons-material/Add'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import CalculateIcon from '@mui/icons-material/Calculate'
import SummarizeIcon from '@mui/icons-material/Summarize'
import ArticleIcon from '@mui/icons-material/Article'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import BarChartIcon from '@mui/icons-material/BarChart'
import SsidChartIcon from '@mui/icons-material/SsidChart'
import GraphicEqIcon from '@mui/icons-material/GraphicEq'

const drawerWidth = 300
const itemsMenu = [
  'Clientes',
  'Fornecedores',
  'Carros',
  'Usuários',
  'Relatórios',
  'Utilitários',
  'Configurações',
  'Logout',
  'Despesas',
  'Garantia'
]

export const Sidebar: React.FC = () => {
  const [collapse1, setCollapse1] = React.useState(false)
  const [collapse2, setCollapse2] = React.useState(false)
  const [collapse3, setCollapse3] = React.useState(false)
  const [collapse4, setCollapse4] = React.useState(false)
  const [collapse5, setCollapse5] = React.useState(false)
  const [collapse6, setCollapse6] = React.useState(false)
  const [collapse7, setCollapse7] = React.useState(false)
  const [collapse8, setCollapse8] = React.useState(false)

  const handleClickC = () => {
    setCollapse1(!collapse1)
  }
  const handleClickF = () => {
    setCollapse2(!collapse2)
  }
  const handleClickCa = () => {
    setCollapse3(!collapse3)
  }
  const handleClickU = () => {
    setCollapse4(!collapse4)
  }
  const handleClickR = () => {
    setCollapse5(!collapse5)
  }
  const handleClickUt = () => {
    setCollapse6(!collapse6)
  }
  const handleClickD = () => {
    setCollapse7(!collapse7)
  }
  const handleClickG = () => {
    setCollapse8(!collapse8)
  }
  return (
    <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' }
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'none' }}>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleClickC}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary={itemsMenu[0]} />
              {collapse1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={collapse1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Novo Cliente" />
                  </ListItemButton>
                </Link>
                <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FormatListBulletedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Consultar Clientes" />
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
            <ListItemButton onClick={handleClickF}>
              <ListItemIcon>
                <HandshakeIcon />
              </ListItemIcon>
              <ListItemText primary={itemsMenu[1]} />
              {collapse2 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={collapse2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Novo Fornecedor" />
                  </ListItemButton>
                </Link>
                <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FormatListBulletedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Consultar Fornecedores" />
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
            <ListItemButton onClick={handleClickCa}>
              <ListItemIcon>
                <DirectionsCarIcon />
              </ListItemIcon>
              <ListItemText primary={itemsMenu[2]} />
              {collapse3 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={collapse3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Novo Carro" />
                  </ListItemButton>
                </Link>
                <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FormatListBulletedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Carros em Estoque" />
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
            <ListItemButton onClick={handleClickD}>
              <ListItemIcon>
                <PaidIcon />
              </ListItemIcon>
              <ListItemText primary={itemsMenu[8]} />
              {collapse7 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={collapse7} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Nova Despesa" />
                  </ListItemButton>
                </Link>
                <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FormatListBulletedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Consultar Despesas" />
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
            <ListItemButton onClick={handleClickG}>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary={itemsMenu[9]} />
              {collapse8 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={collapse8} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cadastrar Despesa de Garantia" />
                  </ListItemButton>
                </Link>
                <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FormatListBulletedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Consultar Despesas de Garantia" />
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
            <ListItemButton onClick={handleClickU}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary={itemsMenu[3]} />
              {collapse4 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={collapse4} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Novo Usuário" />
                  </ListItemButton>
                </Link>
                <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FormatListBulletedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Consultar Usuários" />
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
          </List>
          <Divider />
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleClickR}>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary={itemsMenu[4]} />
              {collapse5 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={collapse5} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <SignalCellularAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Relatório de Despesas" />
                  </ListItemButton>
                </Link>
                <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Relatório de Garantias" />
                  </ListItemButton>
                </Link>
                <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <SsidChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Relatório de Veiculos" />
                  </ListItemButton>
                </Link>
                <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <GraphicEqIcon />
                    </ListItemIcon>
                    <ListItemText primary="Relatório Geral" />
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
            <ListItemButton onClick={handleClickUt}>
              <ListItemIcon>
                <AutoAwesomeMosaicIcon />
              </ListItemIcon>
              <ListItemText primary={itemsMenu[5]} />
              {collapse6 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={collapse6} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <CalculateIcon />
                    </ListItemIcon>
                    <ListItemText primary="Calculadora" />
                  </ListItemButton>
                </Link>
                <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <SummarizeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Excel" />
                  </ListItemButton>
                </Link>
                <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Word" />
                  </ListItemButton>
                </Link>
                <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <TextSnippetIcon />
                    </ListItemIcon>
                    <ListItemText primary="Bloco de Notas" />
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
            <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary={itemsMenu[6]} />
              </ListItemButton>
            </Link>
          </List>
          <Divider />
          <List
            sx={{ width: '100%', maxWidth: 360 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <Link href='#' style={{ textDecoration: 'none', color: '#313638' }} >
              <ListItemButton>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary={itemsMenu[7]} />
              </ListItemButton>
            </Link>
          </List>
        </Box>
      </Drawer>
  )
}
