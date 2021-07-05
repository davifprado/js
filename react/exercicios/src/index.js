import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'
// import Multiplos, { BoaNoite } from './componentes/Multiplos'
// import Multiplos from './componentes/Multiplos'

// import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filhos'

ReactDOM.render( 
    <div>
        
        <Pai nome="Jana"  sobrenome="Ribeiro">
            <Filho nome="Pedro" />
            <Filho nome="Caio" />
            <Filho nome="Paulo" />
        </Pai>

    </div>

    , document.getElementById('root'))