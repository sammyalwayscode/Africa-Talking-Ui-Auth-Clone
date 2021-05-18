import React from 'react'
import iosp from '../Img/iottt.jpg'

function Iot() {
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <img src={iosp} alt='' style={{ height: '200px', width: '200px', borderRadius: '50%', border: '3px solid #fc9206', objectFit: 'cover' }} />
        <h2>Internet Of Things: It's All About What</h2>
        <div style={{ width: '500px' }}>
          The Internet of things (IoT) describes the network of physical objects—“things”—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the Internet.[1][2][3][4][5]

          Things have evolved due to the convergence of multiple technologies, real-time analytics, machine learning, commodity sensors, and embedded systems.[1] Traditional fields of embedded systems, wireless sensor networks, control systems, automation (including home and building automation), and others all contribute to enabling the Internet of things. In the consumer market, IoT technology is most synonymous with products pertaining to the concept of the "smart home", including devices and appliances (such as lighting fixtures, thermostats, home security systems and cameras, and other home appliances) that support one or more common ecosystems, and can be controlled via devices associated with that ecosystem, such as smartphones and smart speakers. IoT can also be used in healthcare systems.[6]

          There are a number of serious concerns about dangers in the growth of IoT, especially in the areas of privacy and security, and consequently industry and governmental moves to address these concerns have begun including the development of international standards.
        </div>
      </div>
    </div>
  )
}

export default Iot
