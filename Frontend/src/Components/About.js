import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function About() 
{
 
  return (
    <>
   <Navbar/>
        <div>
          <h2 className="head3">Crop Diseases:</h2>
          <p className='head5'>Plant diseases are a severe threat to the entire production. Therefore, it is essential for farmers to effectively deal with them and check them with the help of timely prevention. Depending on the agricultural area size, this task can be difficult, especially since the list of harmful crop diseases is quite impressive. Modern technologies come to the aid of farmers. EOSDA Crop Monitoring allows you to identify dangerous areas and apply an individual approach to yield treatment, significantly increasing disease control effectiveness.</p>

          <h2 className="head3">Types Of Crop Diseases & Their Causal Agents</h2>
          <p className='head5'>Traditionally, there are several types of crop disease: abiotic (also known as non-infectious) and biotic (infectious).
Unfavorable environmental conditions often generate non-communicable diseases. Examples are low or high temperature, excess, or lack of moisture. Also, diseases are usually caused by harmful impurities in the air. They can accumulate due to the presence of nearby chemical or metallurgical plants. Usually, the unhealthy physicochemical composition of the soil is the disease source. The latter factor is often the result of poor-quality treatment of fields with some herbicides. These examples prove the importance of sustainable agriculture not only for protecting the environment but also for a profitable business.
<br></br>
Even an unfavorable light regime can cause negative consequences, especially for plants produced in greenhouses. Toxins that some embryophytes (higher plants) and fungi release into the soil can also be causal agents of crop diseases.
As the crop disease triangle shows, а disease will take place if there is a crop susceptible to a certain pathogen agent and the conditions are favorable for a disease to spread.
The plant must be a pathogen’s host, meaning that pathogens don’t attack non-host plants. For example, Pseudomonas syringae pv. Glycinea threatens growing soybeans causing bacterial blight, while bacterial leaf spot on peppers and tomatoes occurs due to Xanthomonas campestris pv. Vesicatoria infections. It should be mentioned that healthy crops, as well as resistant cultivars and pre-treated seeds, are less susceptible to crop diseases.<br></br><br></br>
<img src="https://i0.wp.com/geopard.tech/wp-content/uploads/2021/12/Crop-Diseases_-Types-Causes-and-Symptoms-3-min-1.jpg?resize=810%2C439&ssl=1" alt="leaf1" style={{width:"500px",height:"400px",borderRadius:"50px",marginLeft:"100px"}}/>
<img src="https://eos.com/wp-content/uploads/2021/12/fungal-smut-crop-disese.jpg.webp" alt="leaf1" style={{width:"500px",height:"400px",borderRadius:"50px",marginLeft:"50px"}}/>
</p><br></br>
<h2 className="head3">Crop Diseases Caused By Bacteria</h2>
<p className='head5'>Among the most common infections in agriculture are crop diseases caused by bacteria. In this regard, the prevention and control of this kind of disease are pretty tricky.
To infect the causal agent needs to get into the culture’s tissue. It occurs mainly through damaged areas, such as caused by agricultural tools, insects (fleas), or simply unfavorable weather conditions (dust, wind, heavy rain). But bacteria can also infect plants through natural holes or glands (for example, which secrete nectar).
Another feature of bacterial crop diseases is that causal agents, once in a plant or soil, can remain dormant for a long time until favorable conditions arise for them. First of all, significant temperature fluctuations and high levels of humidity act as catalysts for bacterial activity.</p>
<br></br>
<h2 className="head3">Symptoms Of Bacterial Crop Diseases</h2>
<p  className='head5'>
    The main bacterial disease indications include vascular wilting, necrosis, soft rot and tumor.
Although this type of plant disease can be identified due to its pronounced symptoms, identifying a specific causal agent requires laboratory methods.</p><br></br>
<img src="https://extension.okstate.edu/fact-sheets/images/common-diseases-of-tomatoes-part-ii-diseases-caused-by-bacteria-viruses-and-nematodes/figure-2-7.jpg" alt="leaf1" style={{width:"500px",height:"400px",borderRadius:"50px",marginLeft:"100px"}}/>
<img src="https://extension.okstate.edu/fact-sheets/images/common-diseases-of-tomatoes-part-ii-diseases-caused-by-bacteria-viruses-and-nematodes/figure-1-6.jpg" alt="leaf1" style={{width:"500px",height:"400px",borderRadius:"50px",marginLeft:"50px"}}/>

<h2 className="head3">Common Bacterial Diseases</h2>
<p className='head5'>As noted earlier, due to a huge number of bacteria, there are many disease types. Here are some examples of the most common diseases of crop plants:
<ul>
<li>Granville wilt exposes itself in growth retardation, wilting of the high culture’s part, and the death of roots.</li>
<li>Fire blight symptoms include necrotic weeping ulcers, wilting and rolling of leaves, while the dried parts of a plant do not fall off.</li>
<li>Wildfire of tobacco is widespread in the world and shows itself as yellowish-green spots on leaves.</li>
<li>Blight of beans affects leafage with yellow-greenish spots, either localized or systemic. The discolored parts may turn necrotic.</li>
<li>Aster yellows can be noticed on most vegetables and weeds through malformations and chlorosis.</li>
</ul>
</p><br></br>
<h2 className="head3">Crop Diseases Caused By Fungi</h2>
<p className='head5'>Pathogenic fungi are the most typical agricultural problem. According to research, this plant disease type destroys about a third of all food crops 
every year. In this regard, this problem is severe both from a humanitarian and economic point of view. Like bacterial crop diseases, these infections affect plants mainly through wounds, stomata, and water pores. Also, fungal spores are often carried by gusts of wind.</p>
<br></br>
<h2 className="head3">Symptoms Of Fungal Crop Diseases</h2>
<p className='head5'>Often, a fungal infection is expressed in local or general necrosis. Also, crop diseases caused by fungi can interfere with the average growth or contribute to its abnormal burst, called hypertrophy. Other crop diseases symptoms include:</p>
<p>
  <ul>
    <li>spots on leaves</li>
    <li>exfoliation</li>
    <li>rot</li>
    <li>anthracnose</li>
    <li>ulcers</li>
    <li>curls of leaves and warts</li>
  </ul>
</p>
        </div>
        <Link to="/" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9FbkEt8EWDLyJwqQ80JvC9klbXTQJ-qGX6QzuBSvcN1kbg7xa8725OkrAaOO734wog-E&usqp=CAU" alt="backimg" width="50px"/></Link>
        </>
  )
}
