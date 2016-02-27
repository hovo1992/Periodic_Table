var link = 'https://en.wikipedia.org/';
function setInnerHTML() {
	var main = $('main'), table = $('table'), figure = $('figure'), caption = $('caption'), tbody = $('tbody'), tfoot = $('tfoot');
    
    figure.innerHTML = '<img src="content/imgs/laptop.png" />';
	caption.innerHTML = 'Periodic Table Of The Elements';
	tbody.innerHTML = '<tr> \
	            <th></th> \
	            <th> \
	                <p>1</p> \
	                <p>IA</p> \
	                <p>1A</p> \
				</th> \
				<th colspan="16"></th> \
				<th> \
					<p>18</p> \
	                <p>VIIIA</p> \
	                <p>8A</p> \
				</th> \
			</tr> \
	        <tr> \
			    <th> \
				    <p>1</p> \
			    </th> \
			    <td class="nonmetal" title="hydrogen"> \
				    <a href="' + link + '?title=hydrogen"> \
					    <small>1</small> \
					    <big>H</big> \
					    <bdo>hydrogen</bdo> \
					    <bdi>1.0079</bdi> \
				    </a> \
				    <div> \
					    <p>1</p> \
					    <p>h</p> \
					    <p>hydrogen</p> \
					    <p>1.0079</p> \
				    </div> \
			    </td> \
			    <th> \
				    <p>2</p> \
	                <p>IIA</p> \
	                <p>2A</p> \
			    </th> \
			    <th colspan="10"></th> \
			    <th> \
				    <p>13</p> \
	                <p>IIIA</p> \
	                <p>3A</p> \
			    </th> \
			    <th> \
				    <p>14</p> \
	                <p>IVA</p> \
	                <p>4A</p> \
			    </th> \
			    <th> \
				    <p>15</p> \
	                <p>VA</p> \
	                <p>5A</p> \
			    </th> \
			    <th> \
				    <p>16</p> \
	                <p>VIA</p> \
	                <p>6A</p> \
			    </th> \
			    <th> \
				    <p>17</p> \
	                <p>VIIA</p> \
	                <p>7A</p> \
			    </th> \
			    <td class="noble_gas" title="helium"> \
				    <a href="' + link + 'wiki/helium"> \
					    <small>2</small> \
					    <big>He</big> \
					    <bdo>helium</bdo> \
					    <bdi>4.00260</bdi> \
				    </a> \
				    <div> \
					    <p>2</p> \
					    <p>he</p> \
					    <p>helium</p> \
					    <p>4.00260</p> \
				    </div> \
			    </td> \
		    </tr> \
			<tr> \
				<th> \
					<p>2</p> \
				</th> \
				<td class="alkali_metal" title="Lithium"> \
					<a href="' + link + 'wiki/Lithium"> \
						<small>3</small> \
						<big>Li</big> \
						<bdo>Lithium</bdo> \
						<bdi>6.941</bdi> \
					</a> \
					<div> \
						<p>3</p> \
						<p>Li</p> \
						<p>Lithium</p> \
						<p>6.941</p> \
					</div> \
				</td> \
				<td class="alkaline_metal" title="Beryllium"> \
					<a href="' + link + 'wiki/Beryllium"> \
						<small>4</small> \
						<big>Be</big> \
						<bdo>Beryllium</bdo> \
						<bdi>9.01218</bdi> \
					</a> \
					<div> \
						<p>4</p> \
						<p>Be</p> \
						<p>Beryllium</p> \
						<p>9.01218</p> \
					</div> \
				</td> \
				<th colspan="10"></th> \
				<td class="semi_metal" title="Boron"> \
					<a href="' + link + 'wiki/Boron"> \
						<small>5</small> \
						<big>B</big> \
						<bdo>Boron</bdo> \
						<bdi>10.811</bdi> \
					</a> \
					<div> \
						<p>5</p> \
						<p>B</p> \
						<p>Boron</p> \
						<p>10.811</p> \
					</div> \
				</td> \
				<td class="nonmetal" title="Carbon"> \
					<a href="' + link + 'wiki/Carbon"> \
						<small>6</small> \
						<big>C</big> \
						<bdo>Carbon</bdo> \
						<bdi>12.011</bdi> \
					</a> \
					<div> \
						<p>6</p> \
						<p>C</p> \
						<p>Carbon</p> \
						<p>12.011</p> \
					</div> \
				</td> \
				<td class="nonmetal" title="Nitrogen"> \
					<a href="' + link + 'wiki/Nitrogen"> \
						<small>7</small> \
						<big>N</big> \
						<bdo>Nitrogen</bdo> \
						<bdi>14.00674</bdi> \
					</a> \
					<div> \
						<p>7</p> \
						<p>N</p> \
						<p>Nitrogen</p> \
						<p>14.00674</p> \
					</div> \
				</td> \
				<td class="nonmetal" title="Oxygen"> \
					<a href="' + link + 'wiki/Oxygen"> \
						<small>8</small> \
						<big>O</big> \
						<bdo>Oxygen</bdo> \
						<bdi>15.9994</bdi> \
					</a> \
					<div> \
						<p>8</p> \
						<p>O</p> \
						<p>Oxygen</p> \
						<p>15.9994</p> \
					</div> \
				</td> \
				<td class="halogen" title="Fluorine"> \
					<a href="' + link + 'wiki/Fluorine"> \
						<small>9</small> \
						<big>F</big> \
						<bdo>Fluorine</bdo> \
						<bdi>18.998403</bdi> \
					</a> \
					<div> \
						<p>9</p> \
						<p>F</p> \
						<p>Fluorine</p> \
						<p>18.998403</p> \
					</div> \
				</td> \
				<td class="noble_gas" title="Neon"> \
					<a href="' + link + 'wiki/Neon"> \
						<small>10</small> \
						<big>Ne</big> \
						<bdo>Neon</bdo> \
						<bdi>20.1797</bdi> \
					</a> \
					<div> \
						<p>10</p> \
						<p>Ne</p> \
						<p>Neon</p> \
						<p>20.1797</p> \
					</div> \
				</td> \
			</tr> \
			<tr> \
				<th> \
					<p>3</p> \
				</th>\
				<td class="alkali_metal" title="Sodium (Natrium)"> \
					<a href="' + link + 'wiki/Sodium">\
						<small>11</small> \
						<big>Na</big>\
						<bdo>Sodium</bdo> \
						<bdi>22.989768</bdi> \
					</a> \
					<div> \
						<p>11</p> \
						<p>Na</p> \
						<p>Sodium</p> \
						<p>22.989768</p> \
					</div> \
				</td> \
				<td class="alkaline_metal" title="Magnesium"> \
					<a href="' + link + 'wiki/Magnesium"> \
						<small>12</small> \
						<big>Mg</big> \
						<bdo>Magnesium</bdo> \
						<bdi>24.305</bdi> \
					</a> \
					<div> \
						<p>12</p> \
						<p>Mg</p> \
						<p>Magnesium</p> \
						<p>24.305</p> \
					</div> \
				</td> \
				<th> \
					<p>3</p> \
					<p>IIIB</p> \
					<p>3B</p> \
				</th> \
				<th> \
					<p>4</p> \
					<p>IVB</p> \
					<p>4B</p> \
				</th> \
				<th> \
					<p>5</p> \
					<p>VB</p> \
					<p>5B</p> \
				</th> \
				<th> \
					<p>6</p> \
					<p>VIB</p> \
					<p>6B</p> \
				</th> \
				<th> \
					<p>7</p> \
					<p>VIIB</p> \
					<p>7B</p> \
				</th> \
				<th> \
					<p>8</p> \
					<p>VIII</p> \
					<p>8</p> \
				</th> \
				<th> \
					<p>9</p> \
					<p>VIII</p> \
					<p>8</p> \
				</th> \
				<th> \
					<p>10</p> \
					<p>VIII</p> \
					<p>8</p> \
				</th> \
				<th> \
					<p>11</p> \
					<p>IB</p> \
					<p>1B</p> \
				</th> \
				<th> \
					<p>12</p> \
					<p>IIB</p> \
					<p>2B</p> \
				</th> \
				<td class="basic_metal" title="Aluminum"> \
					<a href="' + link + 'wiki/Aluminum"> \
						<small>13</small> \
						<big>Al</big> \
						<bdo>Aluminum</bdo> \
						<bdi>26.981539</bdi> \
					</a> \
					<div> \
						<p>13</p> \
						<p>Al</p> \
						<p>Aluminum</p> \
						<p>26.981539</p> \
					</div> \
				</td> \
				<td class="semi_metal" title="Silicon"> \
					<a href="' + link + 'wiki/Silicon"> \
						<small>14</small> \
						<big>Si</big> \
						<bdo>Silicon</bdo> \
						<bdi>28.0855</bdi> \
					</a> \
					<div> \
						<p>14</p> \
						<p>Si</p> \
						<p>Silicon</p> \
						<p>28.0855</p> \
					</div> \
				</td> \
				<td class="nonmetal" title="Phosphorus"> \
					<a href="' + link + 'wiki/Phosphorus"> \
						<small>15</small> \
						<big>P</big> \
						<bdo>Phosphorus</bdo> \
						<bdi>30.973762</bdi> \
					</a> \
					<div> \
						<p>15</p> \
						<p>P</p> \
						<p>Phosphorus</p> \
						<p>30.973762</p> \
					</div> \
				</td> \
				<td class="nonmetal" title="Sulfur"> \
					<a href="' + link + 'wiki/Sulfur"> \
						<small>16</small> \
						<big>S</big> \
						<bdo>Sulfur</bdo> \
						<bdi>32.066</bdi> \
					</a> \
					<div> \
						<p>16</p> \
						<p>S</p> \
						<p>Sulfur</p> \
						<p>32.066</p> \
					</div> \
				</td> \
				<td class="halogen" title="Chlorine"> \
					<a href="' + link + 'wiki/Chlorine"> \
						<small>17</small> \
						<big>Cl</big> \
						<bdo>Chlorine</bdo> \
						<bdi>35.4527</bdi> \
					</a> \
					<div> \
						<p>17</p> \
						<p>Cl</p> \
						<p>Chlorine</p> \
						<p>35.4527</p> \
					</div> \
				</td> \
				<td class="noble_gas" title="Argon"> \
					<a href="' + link + 'wiki/Argon"> \
						<small>18</small> \
						<big>Ar</big> \
						<bdo>Argon</bdo> \
						<bdi>39.948</bdi> \
					</a> \
					<div> \
						<p>18</p> \
						<p>Ar</p> \
						<p>Argon</p> \
						<p>39.948</p> \
					</div> \
				</td> \
			</tr> \
			<tr> \
				<th> \
					<p>4</p> \
				</th> \
				<td class="alkali_metal" title="Potassium (Kalium)"> \
					<a href="' + link + 'wiki/Potassium"> \
						<small>19</small> \
						<big>K</big> \
						<bdo>Potassium</bdo> \
						<bdi>39.0983</bdi> \
					</a> \
					<div> \
						<p>19</p> \
						<p>K</p> \
						<p>Potassium</p> \
						<p>39.0983</p> \
					</div> \
				</td> \
				<td class="alkaline_metal" title="Calcium"> \
					<a href="' + link + 'wiki/Calcium"> \
						<small>20</small> \
						<big>Ca</big> \
						<bdo>Calcium</bdo> \
						<bdi>40.078</bdi> \
					</a> \
					<div> \
						<p>20</p> \
						<p>Ca</p> \
						<p>Calcium</p> \
						<p>40.078</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Scandium"> \
					<a href="' + link + 'wiki/Scandium"> \
						<small>21</small> \
						<big>Sc</big> \
						<bdo>Scandium</bdo> \
						<bdi>44.95591</bdi> \
					</a> \
					<div> \
						<p>21</p> \
						<p>Sc</p> \
						<p>Scandium</p> \
						<p>44.95591</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Titanium"> \
					<a href="' + link + 'wiki/Titanium"> \
						<small>22</small> \
						<big>Ti</big> \
						<bdo>Titanium</bdo> \
						<bdi>47.88</bdi> \
					</a> \
					<div> \
						<p>22</p> \
						<p>Ti</p> \
						<p>Titanium</p> \
						<p>47.88</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Vanadium"> \
					<a href="' + link + 'wiki/Vanadium"> \
						<small>23</small> \
						<big>V</big> \
						<bdo>Vanadium</bdo> \
						<bdi>50.9415</bdi> \
					</a> \
					<div> \
						<p>23</p> \
						<p>V</p> \
						<p>Vanadium</p> \
						<p>50.9415</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Chromium"> \
					<a href="' + link + 'wiki/Chromium"> \
						<small>24</small> \
						<big>Cr</big> \
						<bdo>Chromium</bdo> \
						<bdi>51.9961</bdi> \
					</a> \
					<div> \
						<p>24</p> \
						<p>Cr</p> \
						<p>Chromium</p> \
						<p>51.9961</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Manganese"> \
					<a href="' + link + 'wiki/Manganese"> \
						<small>25</small> \
						<big>Mn</big> \
						<bdo>Manganese</bdo> \
						<bdi>54.938</bdi> \
					</a> \
					<div> \
						<p>25</p> \
						<p>Mn</p> \
						<p>Manganese</p> \
						<p>54.938</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Iron (Ferrum)"> \
					<a href="' + link + 'wiki/Iron"> \
						<small>26</small> \
						<big>Fe</big> \
						<bdo>Iron</bdo> \
						<bdi>55.847</bdi> \
					</a> \
					<div> \
						<p>26</p> \
						<p>Fe</p> \
						<p>Iron</p> \
						<p>55.847</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Cobalt"> \
					<a href="' + link + 'wiki/Cobalt"> \
						<small>27</small> \
						<big>Co</big> \
						<bdo>Cobalt</bdo> \
						<bdi>58.9332</bdi> \
					</a> \
					<div> \
						<p>27</p> \
						<p>Co</p> \
						<p>Cobalt</p> \
						<p>58.9332</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Nickel"> \
					<a href="' + link + 'wiki/Nickel"> \
						<small>28</small> \
						<big>Ni</big> \
						<bdo>Nickel</bdo> \
						<bdi>58.6934</bdi> \
					</a> \
					<div> \
						<p>28</p> \
						<p>Ni</p> \
						<p>Nickel</p> \
						<p>58.6934</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Copper"> \
					<a href="' + link + 'wiki/Copper"> \
						<small>29</small> \
						<big>Cu</big> \
						<bdo>Copper</bdo> \
						<bdi>63.546</bdi> \
					</a> \
					<div> \
						<p>29</p> \
						<p>Cu</p> \
						<p>Copper</p> \
						<p>63.546</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Zinc"> \
					<a href="' + link + 'wiki/Zinc"> \
						<small>30</small> \
						<big>Zn</big> \
						<bdo>Zinc</bdo> \
						<bdi>65.39</bdi> \
					</a> \
					<div> \
						<p>30</p> \
						<p>Zn</p> \
						<p>Zinc</p> \
						<p>65.39</p> \
					</div> \
				</td> \
				<td class="basic_metal" title="Gallium"> \
					<a href="' + link + 'wiki/Gallium"> \
						<small>31</small> \
						<big>Ga</big> \
						<bdo>Gallium</bdo> \
						<bdi>69.732</bdi> \
					</a> \
					<div> \
						<p>31</p> \
						<p>Ga</p> \
						<p>Gallium</p> \
						<p>69.732</p> \
					</div> \
				</td> \
				<td class="semi_metal" title="Germanium"> \
					<a href="' + link + 'wiki/Germanium"> \
						<small>32</small> \
						<big>Ge</big> \
						<bdo>Germanium</bdo> \
						<bdi>72.64</bdi> \
					</a> \
					<div> \
						<p>32</p> \
						<p>Ge</p> \
						<p>Germanium</p> \
						<p>72.64</p> \
					</div> \
				</td> \
				<td class="semi_metal" title="Arsenic"> \
					<a href="' + link + 'wiki/Arsenic"> \
						<small>33</small> \
						<big>As</big> \
						<bdo>Arsenic</bdo> \
						<bdi>74.92159</bdi> \
					</a> \
					<div> \
						<p>33</p> \
						<p>As</p> \
						<p>Arsenic</p> \
						<p>74.92159</p> \
					</div> \
				</td> \
				<td class="nonmetal" title="Selenium"> \
					<a href="' + link + 'wiki/Selenium"> \
						<small>34</small> \
						<big>Se</big> \
						<bdo>Selenium</bdo> \
						<bdi>78.96</bdi> \
					</a> \
					<div> \
						<p>34</p> \
						<p>Se</p> \
						<p>Selenium</p> \
						<p>78.96</p> \
					</div> \
				</td> \
				<td class="halogen" title="Bromine"> \
					<a href="' + link + 'wiki/Bromine"> \
						<small>35</small> \
						<big>Br</big> \
						<bdo>Bromine</bdo> \
						<bdi>79.904</bdi> \
					</a> \
					<div> \
						<p>35</p> \
						<p>Br</p> \
						<p>Bromine</p> \
						<p>79.904</p> \
					</div> \
				</td> \
				<td class="noble_gas" title="Krypton"> \
					<a href="' + link + 'wiki/Krypton"> \
						<small>36</small> \
						<big>Kr</big> \
						<bdo>Krypton</bdo> \
						<bdi>83.80</bdi> \
					</a> \
					<div> \
						<p>36</p> \
						<p>Kr</p> \
						<p>Krypton</p> \
						<p>83.80</p> \
					</div> \
				</td> \
			</tr> \
			<tr> \
				<th> \
					<p>5</p> \
				</th> \
				<td class="alkali_metal" title="Rabidium"> \
					<a href="' + link + 'wiki/Rabidium"> \
						<small>37</small> \
						<big>Rb</big> \
						<bdo>Rabidium</bdo> \
						<bdi>85.4678</bdi> \
					</a> \
					<div> \
						<p>37</p> \
						<p>Rb</p> \
						<p>Rabidium</p> \
						<p>85.4678</p> \
					</div> \
				</td> \
				<td class="alkaline_metal" title="Strontium"> \
					<a href="' + link + 'wiki/Strontium"> \
						<small>38</small> \
						<big>Sr</big> \
						<bdo>Strontium</bdo> \
						<bdi>87.62</bdi> \
					</a> \
					<div> \
						<p>38</p> \
						<p>Sr</p> \
						<p>Strontium</p> \
						<p>87.62</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Yttrium"> \
					<a href="' + link + 'wiki/Yttrium"> \
						<small>39</small> \
						<big>Y</big> \
						<bdo>Yttrium</bdo> \
						<bdi>88.90585</bdi> \
					</a> \
					<div> \
						<p>39</p> \
						<p>Y</p> \
						<p>Yttrium</p> \
						<p>88.90585</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Zirconium"> \
					<a href="' + link + 'wiki/Zirconium"> \
						<small>40</small> \
						<big>Zr</big> \
						<bdo>Zirconium</bdo> \
						<bdi>91.224</bdi> \
					</a> \
					<div> \
						<p>40</p> \
						<p>Zr</p> \
						<p>Zirconium</p> \
						<p>91.224</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Niobium"> \
					<a href="' + link + 'wiki/Niobium"> \
						<small>41</small> \
						<big>Nb</big> \
						<bdo>Niobium</bdo> \
						<bdi>92.90638</bdi> \
					</a> \
					<div> \
						<p>41</p> \
						<p>Nb</p> \
						<p>Niobium</p> \
						<p>92.90638</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Molybdenum"> \
					<a href="' + link + 'wiki/Molybdenum"> \
						<small>42</small> \
						<big>Mo</big> \
						<bdo>Molybdenum</bdo> \
						<bdi>95.94</bdi> \
					</a> \
					<div> \
						<p>42</p> \
						<p>Mo</p> \
						<p>Molybdenum</p> \
						<p>95.94</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Technetium"> \
					<a href="' + link + 'wiki/Technetium"> \
						<small>43</small> \
						<big>Tc</big> \
						<bdo>Technetium</bdo> \
						<bdi>98.9072</bdi> \
					</a> \
					<div> \
						<p>43</p> \
						<p>Tc</p> \
						<p>Technetium</p> \
						<p>98.9072</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Ruthenium"> \
					<a href="' + link + 'wiki/Ruthenium"> \
						<small>44</small> \
						<big>Ru</big> \
						<bdo>Ruthenium</bdo> \
						<bdi>101.07</bdi> \
					</a> \
					<div> \
						<p>44</p> \
						<p>Ru</p> \
						<p>Ruthenium</p> \
						<p>101.07</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Rhodium"> \
					<a href="' + link + 'wiki/Rhodium"> \
						<small>45</small> \
						<big>Rh</big> \
						<bdo>Rhodium</bdo> \
						<bdi>102.9055</bdi> \
					</a> \
					<div> \
						<p>45</p> \
						<p>Rh</p> \
						<p>Rhodium</p> \
						<p>102.9055</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Palladium"> \
					<a href="' + link + 'wiki/Palladium"> \
						<small>46</small> \
						<big>Pd</big> \
						<bdo>Palladium</bdo> \
						<bdi>106.42</bdi> \
					</a> \
					<div> \
						<p>46</p> \
						<p>Pd</p> \
						<p>Palladium</p> \
						<p>106.42</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Silver (Argentum)"> \
					<a href="' + link + 'wiki/Silver"> \
						<small>47</small> \
						<big>Ag</big> \
						<bdo>Silver</bdo> \
						<bdi>107.8682</bdi> \
					</a> \
					<div> \
						<p>47</p> \
						<p>Ag</p> \
						<p>Silver</p> \
						<p>107.8682</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Cadmium"> \
					<a href="' + link + 'wiki/Cadmium"> \
						<small>48</small> \
						<big>Cd</big> \
						<bdo>Cadmium</bdo> \
						<bdi>112.411</bdi> \
					</a> \
					<div> \
						<p>48</p> \
						<p>Cd</p> \
						<p>Cadmium</p> \
						<p>112.411</p> \
					</div> \
				</td> \
				<td class="basic_metal" title="Indium"> \
					<a href="' + link + 'wiki/Indium"> \
						<small>49</small> \
						<big>In</big> \
						<bdo>Indium</bdo> \
						<bdi>114.818</bdi> \
					</a> \
					<div> \
						<p>49</p> \
						<p>In</p> \
						<p>Indium</p> \
						<p>114.818</p> \
					</div> \
				</td> \
				<td class="basic_metal" title="Tin (Stannum)"> \
					<a href="' + link + 'wiki/Tin"> \
						<small>50</small> \
						<big>Sn</big> \
						<bdo>Tin</bdo> \
						<bdi>118.71</bdi> \
					</a> \
					<div> \
						<p>50</p> \
						<p>Sn</p> \
						<p>Tin</p> \
						<p>118.71</p> \
					</div> \
				</td> \
				<td class="semi_metal" title="Antimony (Stibium)"> \
					<a href="' + link + 'wiki/Antimony"> \
						<small>51</small> \
						<big>Sb</big> \
						<bdo>Antimony</bdo> \
						<bdi>121.760</bdi> \
					</a> \
					<div> \
						<p>51</p> \
						<p>Sb</p> \
						<p>Antimony</p> \
						<p>121.760</p> \
					</div> \
				</td> \
				<td class="semi_metal" title="Tellurium"> \
					<a href="' + link + 'wiki/Tellurium"> \
						<small>52</small> \
						<big>Te</big> \
						<bdo>Tellurium</bdo> \
						<bdi>127.6</bdi> \
					</a> \
					<div> \
						<p>52</p> \
						<p>Te</p> \
						<p>Tellurium</p> \
						<p>127.6</p> \
					</div> \
				</td> \
				<td class="halogen" title="Iodine"> \
					<a href="' + link + 'wiki/Iodine"> \
						<small>53</small> \
						<big>I</big> \
						<bdo>Iodine</bdo> \
						<bdi>126.90447</bdi> \
					</a> \
					<div> \
						<p>53</p> \
						<p>I</p> \
						<p>Iodine</p> \
						<p>126.90447</p> \
					</div> \
				</td> \
				<td class="noble_gas" title="Xenon"> \
					<a href="' + link + 'wiki/Xenon"> \
						<small>54</small> \
						<big>Xe</big> \
						<bdo>Xenon</bdo> \
						<bdi>131.29</bdi> \
					</a> \
					<div> \
						<p>54</p> \
						<p>Xe</p> \
						<p>Xenon</p> \
						<p>131.29</p> \
					</div> \
				</td> \
			</tr> \
			<tr> \
				<th> \
					<p>6</p> \
				</th> \
				<td class="alkali_metal" title="Cesium"> \
					<a href="' + link + 'wiki/Cesium"> \
						<small>55</small> \
						<big>Cs</big> \
						<bdo>Cesium</bdo> \
						<bdi>132.90543</bdi> \
					</a> \
					<div> \
						<p>55</p> \
						<p>Cs</p> \
						<p>Cesium</p> \
						<p>132.90543</p> \
					</div> \
				</td> \
				<td class="alkaline_metal" title="Barium"> \
					<a href="' + link + 'wiki/Barium"> \
						<small>56</small> \
						<big>Ba</big> \
						<bdo>Barium</bdo> \
						<bdi>137.327</bdi> \
					</a> \
					<div> \
						<p>56</p> \
						<p>Ba</p> \
						<p>Barium</p> \
						<p>137.327</p> \
					</div> \
				</td> \
				<td class="lanthanide numb" title="Lanthanides"> \
					<p>57-71</p> \
					<div><p>Lanthanides</p></div> \
				</td> \
				<td class="transition_metal" title="Hafnium"> \
					<a href="' + link + 'wiki/Hafnium"> \
						<small>72</small> \
						<big>Hf</big> \
						<bdo>Hafnium</bdo> \
						<bdi>178.49</bdi> \
					</a> \
					<div> \
						<p>72</p> \
						<p>Hf</p> \
						<p>Hafnium</p> \
						<p>178.49</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Tantalum"> \
					<a href="' + link + 'wiki/Tantalum"> \
						<small>73</small> \
						<big>Ta</big> \
						<bdo>Tantalum</bdo> \
						<bdi>180.9479</bdi> \
					</a> \
					<div> \
						<p>73</p> \
						<p>Ta</p> \
						<p>Tantalum</p> \
						<p>180.9479</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Tungsten"> \
					<a href="' + link + 'wiki/Tungsten"> \
						<small>74</small> \
						<big>W</big> \
						<bdo>Tungsten</bdo> \
						<bdi>183.85</bdi> \
					</a> \
					<div> \
						<p>74</p> \
						<p>W</p> \
						<p>Tungsten</p> \
						<p>183.85</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Rhenium"> \
					<a href="' + link + 'wiki/Rhenium"> \
						<small>75</small> \
						<big>Re</big> \
						<bdo>Rhenium</bdo> \
						<bdi>186.207</bdi> \
					</a> \
					<div> \
						<p>75</p> \
						<p>Re</p> \
						<p>Rhenium</p> \
						<p>186.207</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Osmium"> \
					<a href="' + link + 'wiki/Osmium"> \
						<small>76</small> \
						<big>Os</big> \
						<bdo>Osmium</bdo> \
						<bdi>190.23</bdi> \
					</a> \
					<div> \
						<p>76</p> \
						<p>Os</p> \
						<p>Osmium</p> \
						<p>190.23</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Iridium"> \
					<a href="' + link + 'wiki/Iridium"> \
						<small>77</small> \
						<big>Ir</big> \
						<bdo>Iridium</bdo> \
						<bdi>192.22</bdi> \
					</a> \
					<div> \
						<p>77</p> \
						<p>Ir</p> \
						<p>Iridium</p> \
						<p>192.22</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Platinum"> \
					<a href="' + link + 'wiki/Platinum"> \
						<small>78</small> \
						<big>Pt</big> \
						<bdo>Platinum</bdo> \
						<bdi>195.08</bdi> \
					</a> \
					<div> \
						<p>78</p> \
						<p>Pt</p> \
						<p>Platinum</p> \
						<p>195.08</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Gold (Aurum)"> \
					<a href="' + link + 'wiki/Gold"> \
						<small>79</small> \
						<big>Au</big> \
						<bdo>Gold</bdo> \
						<bdi>196.9665</bdi> \
					</a> \
					<div> \
						<p>79</p> \
						<p>Au</p> \
						<p>Gold</p> \
						<p>196.9665</p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Mercury (Hydrargyrum)"> \
					<a href="' + link + 'wiki/Mercury_(element)"> \
						<small>80</small> \
						<big>Hg</big> \
						<bdo>Mercury</bdo> \
						<bdi>200.59</bdi> \
					</a> \
					<div> \
						<p>80</p> \
						<p>Hg</p> \
						<p>Mercury</p> \
						<p>200.59</p> \
					</div> \
				</td> \
				<td class="basic_metal" title="Thallium"> \
					<a href="' + link + 'wiki/Thallium"> \
						<small>81</small> \
						<big>Tl</big> \
						<bdo>Thallium</bdo> \
						<bdi>204.3833</bdi> \
					</a> \
					<div> \
						<p>81</p> \
						<p>Tl</p> \
						<p>Thallium</p> \
						<p>204.3833</p> \
					</div> \
				</td> \
				<td class="basic_metal" title="Lead (Plumbum)"> \
					<a href="' + link + 'wiki/Lead"> \
						<small>82</small> \
						<big>Pb</big> \
						<bdo>Lead</bdo> \
						<bdi>207.2</bdi> \
					</a> \
					<div> \
						<p>82</p> \
						<p>Pb</p> \
						<p>Lead</p> \
						<p>207.2</p> \
					</div> \
				</td> \
				<td class="basic_metal" title="Bismuth"> \
					<a href="' + link + 'wiki/Bismuth"> \
						<small>83</small> \
						<big>Bi</big> \
						<bdo>Bismuth</bdo> \
						<bdi>208.98037</bdi> \
					</a> \
					<div> \
						<p>83</p> \
						<p>Bi</p> \
						<p>Bismuth</p> \
						<p>208.98037</p> \
					</div> \
				</td> \
				<td class="semi_metal" title="Polonium"> \
					<a href="' + link + 'wiki/Polonium"> \
						<small>84</small> \
						<big>Po</big> \
						<bdo>Polonium</bdo> \
						<bdi><q>208.9824</q></bdi> \
					</a> \
					<div> \
						<p>84</p> \
						<p>Po</p> \
						<p>Polonium</p> \
						<p><q>208.9824</q></p> \
					</div> \
				</td> \
				<td class="halogen" title="Astatine"> \
					<a href="' + link + 'wiki/Astatine"> \
						<small>85</small> \
						<big>At</big> \
						<bdo>Astatine</bdo> \
						<bdi>209.9871</bdi> \
					</a> \
					<div> \
						<p>85</p> \
						<p>At</p> \
						<p>Astatine</p> \
						<p>209.9871</p> \
					</div> \
				</td> \
				<td class="noble_gas" title="Radon"> \
					<a href="' + link + 'wiki/Radon"> \
						<small>86</small> \
						<big>Rn</big> \
						<bdo>Radon</bdo> \
						<bdi>222.0176</bdi> \
					</a> \
					<div> \
						<p>86</p> \
						<p>Rn</p> \
						<p>Radon</p> \
						<p>222.0176</p> \
					</div> \
				</td> \
			</tr> \
			<tr> \
				<th> \
					<p>7</p> \
				</th> \
				<td class="alkali_metal" title="Francium"> \
					<a href="' + link + 'wiki/Francium"> \
						<small>87</small> \
						<big>Fr</big> \
						<bdo>Francium</bdo> \
						<bdi>223.0197</bdi> \
					</a> \
					<div> \
						<p>87</p> \
						<p>Fr</p> \
						<p>Francium</p> \
						<p>223.0197</p> \
					</div> \
				</td> \
				<td class="alkaline_metal" title="Radium"> \
					<a href="' + link + 'wiki/Radium"> \
						<small>88</small> \
						<big>Ra</big> \
						<bdo>Radium</bdo> \
						<bdi>226.0254</bdi> \
					</a> \
					<div> \
						<p>88</p> \
						<p>Ra</p> \
						<p>Radium</p> \
						<p>226.0254</p> \
					</div> \
				</td> \
				<td class="actinide numb" title="Actinides"> \
					<p>89-103</p> \
					<div><p>Actinides</p></div> \
				</td> \
				<td class="transition_metal" title="Rutherfordium"> \
					<a href="' + link + 'wiki/Rutherfordium"> \
						<small>104</small> \
						<big>Rf</big> \
						<bdo>Rutherfordium</bdo> \
						<bdi><q>261</q></bdi> \
					</a> \
					<div> \
						<p>104</p> \
						<p>Rf</p> \
						<p>Rutherfordium</p> \
						<p><q>261</q></p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Dubnium"> \
					<a href="' + link + 'wiki/Dubnium"> \
						<small>105</small> \
						<big>Db</big> \
						<bdo>Dubnium</bdo> \
						<bdi><q>262</q></bdi> \
					</a> \
					<div> \
						<p>105</p> \
						<p>Db</p> \
						<p>Dubnium</p> \
						<p><q>262</q></p>\
					</div> \
				</td> \
				<td class="transition_metal" title="Seaborgium"> \
					<a href="' + link + 'wiki/Seaborgium"> \
						<small>106</small> \
						<big>Sg</big> \
						<bdo>Seaborgium</bdo> \
						<bdi><q>266</q></bdi> \
					</a> \
					<div> \
						<p>106</p> \
						<p>Sg</p> \
						<p>Seaborgium</p> \
						<p><q>266</q></p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Bohrium"> \
					<a href="' + link + 'wiki/Bohrium"> \
						<small>107</small> \
						<big>Bh</big> \
						<bdo>Bohrium</bdo> \
						<bdi><q>264</q></bdi> \
					</a> \
					<div> \
						<p>107</p> \
						<p>Bh</p> \
						<p>Bohrium</p> \
						<p><q>264</q></p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Hassium"> \
					<a href="' + link + 'wiki/Hassium"> \
						<small>108</small> \
						<big>Hs</big> \
						<bdo>Hassium</bdo> \
						<bdi><q>269</q></bdi> \
					</a> \
					<div> \
						<p>108</p> \
						<p>Hs</p> \
						<p>Hassium</p> \
						<p><q>269</q></p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Meitnerium"> \
					<a href="' + link + 'wiki/Meitnerium"> \
						<small>109</small> \
						<big>Mt</big> \
						<bdo>Meitnerium</bdo> \
						<bdi><q>268</q></bdi> \
					</a> \
					<div> \
						<p>109</p> \
						<p>Mt</p> \
						<p>Meitnerium</p> \
						<p><q>268</q></p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Darmstadtium"> \
					<a href="' + link + 'wiki/Darmstadtium"> \
						<small>110</small> \
						<big>Ds</big> \
						<bdo>Darmstadtium</bdo> \
						<bdi><q>269</q></bdi> \
					</a> \
					<div> \
						<p>110</p> \
						<p>Ds</p> \
						<p>Darmstadtium</p> \
						<p><q>269</q></p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Roentgenium"> \
					<a href="' + link + 'wiki/Roentgenium"> \
						<small>111</small> \
						<big>Rg</big> \
						<bdo>Roentgenium</bdo> \
						<bdi><q>272</q></bdi> \
					</a> \
					<div> \
						<p>111</p> \
						<p>Rg</p> \
						<p>Roentgenium</p> \
						<p><q>272</q></p> \
					</div> \
				</td> \
				<td class="transition_metal" title="Copernicium"> \
					<a href="' + link + 'wiki/Copernicium"> \
						<small>112</small> \
						<big>Cn</big> \
						<bdo>Copernicium</bdo> \
						<bdi><q>277</q></bdi> \
					</a> \
					<div> \
						<p>112</p> \
						<p>Cn</p> \
						<p>Copernicium</p> \
						<p><q>277</q></p> \
					</div> \
				</td> \
				<td class="basic_metal" title="Ununtrium"> \
					<a href="' + link + 'wiki/Ununtrium"> \
						<small>113</small> \
						<big>Uut</big> \
						<bdo>Ununtrium</bdo> \
						<bdi>unknown</bdi> \
					</a> \
					<div> \
						<p>113</p> \
						<p>Uut</p> \
						<p>Ununtrium</p> \
						<p>unknown</p> \
					</div> \
				</td> \
				<td class="basic_metal" title="Ununquadium"> \
					<a href="' + link + 'wiki/Ununquadium"> \
						<small>114</small> \
						<big>Uuq</big> \
						<bdo>Ununquadium</bdo> \
						<bdi><q>289</q></bdi> \
					</a> \
					<div> \
						<p>114</p> \
						<p>Uuq</p> \
						<p>Ununquadium</p> \
						<p><q>289</q></p> \
					</div> \
				</td> \
				<td class="basic_metal" title="Ununpentium"> \
					<a href="' + link + 'wiki/Ununpentium"> \
						<small>115</small> \
						<big>Uup</big> \
						<bdo>Ununpentium</bdo> \
						<bdi>unknown</bdi> \
					</a> \
					<div> \
						<p>115</p> \
						<p>Uup</p> \
						<p>Ununpentium</p> \
						<p>unknown</p> \
					</div> \
				</td> \
				<td class="basic_metal" title="Ununhexium"> \
					<a href="' + link + 'wiki/Ununhexium"> \
						<small>116</small> \
						<big>Uuh</big> \
						<bdo>Ununhexium</bdo> \
						<bdi><q>298</q></bdi> \
					</a> \
					<div> \
						<p>116</p> \
						<p>Uuh</p> \
						<p>Ununhexium</p> \
						<p><q>298</q></p> \
					</div> \
				</td> \
				<td class="halogen" title="Ununseptium"> \
					<a href="' + link + 'wiki/Ununseptium"> \
						<small>117</small> \
						<big>Uus</big> \
						<bdo>Ununseptium</bdo> \
						<bdi>unknown</bdi> \
					</a> \
					<div> \
						<p>117</p> \
						<p>Uus</p> \
						<p>Ununseptium</p> \
						<p>unknown</p> \
					</div> \
				</td> \
				<td class="noble_gas" title="Ununoctium"> \
					<a href="' + link + 'wiki/Ununoctium"> \
						<small>118</small> \
						<big>Uuo</big> \
						<bdo>Ununoctium</bdo> \
						<bdi>unknown</bdi> \
					</a> \
					<div> \
						<p>118</p> \
						<p>Uuo</p> \
						<p>Ununoctium</p> \
						<p>unknown</p> \
					</div> \
				</td> \
			</tr> \
			<tr> \
				<td colspan="19" class="td1"> \
					<table class="child"> \
						<tbody> \
							<tr> \
								<th colspan="3" class="th1" title="Lanthanides"><p class="p1">Lanthanide Series</p></th> \
								<td class="lanthanide" title="Lanthanum"> \
									<a href="' + link + 'wiki/Lanthanum"> \
										<small>57</small> \
										<big>La</big> \
										<bdo>Lanthanum</bdo> \
										<bdi>138.9055</bdi> \
									</a> \
									<div> \
										<p>57</p> \
										<p>La</p> \
										<p>Lanthanum</p> \
										<p>138.9055</p> \
									</div> \
								</td> \
								<td class="lanthanide" title="Cerium"> \
									<a href="' + link + 'wiki/Cerium"> \
										<small>58</small> \
										<big>Ce</big> \
										<bdo>Cerium</bdo> \
										<bdi>140.115</bdi> \
									</a> \
									<div> \
										<p>58</p> \
										<p>Ce</p> \
										<p>Cerium</p> \
										<p>140.115</p> \
									</div> \
								</td> \
								<td class="lanthanide" title="Praseodymium"> \
									<a href="' + link + 'wiki/Praseodymium"> \
										<small>59</small> \
										<big>Pr</big> \
										<bdo>Praseodymium</bdo> \
										<bdi>140.90765</bdi> \
									</a> \
									<div> \
										<p>59</p> \
										<p>Pr</p> \
										<p>Praseodymium</p> \
										<p>140.90765</p> \
									</div> \
								</td> \
								<td class="lanthanide" title="Neodymium"> \
									<a href="' + link + 'wiki/Neodymium"> \
										<small>60</small> \
										<big>Nd</big> \
										<bdo>Neodymium</bdo> \
										<bdi>144.24</bdi> \
									</a> \
									<div> \
										<p>60</p> \
										<p>Nd</p> \
										<p>Neodymium</p> \
										<p>144.24</p> \
									</div> \
								</td> \
								<td class="lanthanide" title="Promethium"> \
									<a href="' + link + 'wiki/Promethium"> \
										<small>61</small> \
										<big>Pm</big> \
										<bdo>Promethium</bdo> \
										<bdi>144.9127</bdi> \
									</a> \
									<div> \
										<p>61</p> \
										<p>Pm</p> \
										<p>Promethium</p> \
										<p>144.9127</p> \
									</div> \
								</td> \
								<td class="lanthanide" title="Samarium"> \
									<a href="' + link + 'wiki/Samarium"> \
										<small>62</small> \
										<big>Sm</big> \
										<bdo>Samarium</bdo> \
										<bdi>150.36</bdi> \
									</a> \
									<div> \
										<p>62</p> \
										<p>Sm</p> \
										<p>Samarium</p> \
										<p>150.36</p> \
									</div> \
								</td> \
								<td class="lanthanide" title="Europium"> \
									<a href="' + link + 'wiki/Europium"> \
										<small>63</small> \
										<big>Eu</big> \
										<bdo>Europium</bdo> \
										<bdi>151.9655</bdi> \
									</a> \
									<div> \
										<p>63</p> \
										<p>Eu</p> \
										<p>Europium</p> \
										<p>151.9655</p> \
									</div> \
								</td> \
								<td class="lanthanide" title="Gadolinium"> \
									<a href="' + link + 'wiki/Gadolinium"> \
										<small>64</small> \
										<big>Gd</big> \
										<bdo>Gadolinium</bdo> \
										<bdi>157.25</bdi> \
									</a> \
									<div> \
										<p>64</p> \
										<p>Gd</p> \
										<p>Gadolinium</p> \
										<p>157.25</p> \
									</div> \
								</td> \
								<td class="lanthanide" title="Terbium"> \
									<a href="' + link + 'wiki/Terbium"> \
										<small>65</small> \
										<big>Tb</big> \
										<bdo>Terbium</bdo> \
										<bdi>158.92534</bdi> \
									</a> \
									<div> \
										<p>65</p> \
										<p>Tb</p> \
										<p>Terbium</p> \
										<p>158.92534</p> \
									</div> \
								</td> \
								<td class="lanthanide" title="Dysprosium"> \
									<a href="' + link + 'wiki/Dysprosium"> \
										<small>66</small> \
										<big>Dy</big> \
										<bdo>Dysprosium</bdo> \
										<bdi>162.50</bdi> \
									</a> \
									<div> \
										<p>66</p> \
										<p>Dy</p> \
										<p>Dysprosium</p> \
										<p>162.50</p> \
									</div> \
								</td> \
								<td class="lanthanide" title="Holmium"> \
									<a href="' + link + 'wiki/Holmium"> \
										<small>67</small> \
										<big>Ho</big> \
										<bdo>Holmium</bdo> \
										<bdi>164.93032</bdi> \
									</a> \
									<div> \
										<p>67</p> \
										<p>Ho</p> \
										<p>Holmium</p> \
										<p>164.93032</p> \
									</div> \
								</td> \
								<td class="lanthanide" title="Erbium"> \
									<a href="' + link + 'wiki/Erbium"> \
										<small>68</small> \
										<big>Er</big> \
										<bdo>Erbium</bdo> \
										<bdi>167.26</bdi> \
									</a> \
									<div> \
										<p>68</p> \
										<p>Er</p> \
										<p>Erbium</p> \
										<p>167.26</p> \
									</div> \
								</td> \
								<td class="lanthanide" title="Thulium"> \
									<a href="' + link + 'wiki/Thulium"> \
										<small>69</small> \
										<big>Tm</big> \
										<bdo>Thulium</bdo> \
										<bdi>168.93421</bdi> \
									</a> \
									<div> \
										<p>69</p> \
										<p>Tm</p> \
										<p>Thulium</p> \
										<p>168.93421</p> \
									</div> \
								</td> \
								<td class="lanthanide" title="Ytterbium"> \
									<a href="' + link + 'wiki/Ytterbium"> \
										<small>70</small> \
										<big>Yb</big> \
										<bdo>Ytterbium</bdo> \
										<bdi>173.04</bdi> \
									</a> \
									<div> \
										<p>70</p> \
										<p>Yb</p> \
										<p>Ytterbium</p> \
										<p>173.04</p> \
									</div> \
								</td> \
								<td class="lanthanide" title="Lutetium"> \
									<a href="' + link + 'wiki/Lutetium"> \
										<small>71</small> \
										<big>Lu</big> \
										<bdo>Lutetium</bdo> \
										<bdi>174.967</bdi> \
									</a> \
									<div> \
										<p>71</p> \
										<p>Lu</p> \
										<p>Lutetium</p> \
										<p>174.967</p> \
									</div> \
								</td> \
							</tr> \
			                <tr> \
				                <th colspan="3" class="th1" title="Actinides"><p class="p1">Actinide Series</p></th> \
				                <td class="actinide"> \
					                <a href="' + link + 'wiki/Actinium"> \
						                <small>89</small> \
						                <big>Ac</big> \
						                <bdo>Actinium</bdo> \
						                <bdi>227.0278</bdi> \
					                </a> \
					                <div> \
						                <p>89</p> \
						                <p>Ac</p> \
						                <p>Actinium</p> \
						                <p>227.0278</p> \
					                </div> \
				                </td> \
				                <td class="actinide" title="Thorium"> \
					                <a href="' + link + 'wiki/Thorium"> \
						                <small>90</small> \
						                <big>Th</big> \
						                <bdo>Thorium</bdo> \
						                <bdi>232.0381</bdi> \
					                </a> \
					                <div> \
						                <p>90</p> \
						                <p>Th</p> \
						                <p>Thorium</p> \
						                <p>232.0381</p> \
					                </div> \
				                </td> \
				                <td class="actinide" title="Protactinium"> \
					                <a href="' + link + 'wiki/Protactinium"> \
						                <small>91</small> \
						                <big>Pa</big> \
						                <bdo>Protactinium</bdo> \
						                <bdi>231.03588</bdi> \
					                </a> \
					                <div> \
						                <p>91</p> \
						                <p>Pa</p> \
						                <p>Protactinium</p> \
						                <p>231.03588</p> \
					                </div> \
				                </td> \
				                <td class="actinide" title="Uranium"> \
					                <a href="' + link + 'wiki/Uranium"> \
						                <small>92</small> \
						                <big>U</big> \
						                <bdo>Uranium</bdo> \
						                <bdi>238.0289</bdi> \
					                </a> \
					                <div> \
						                <p>92</p> \
						                <p>U</p> \
						                <p>Uranium</p> \
						                <p>238.0289</p> \
					                </div> \
				                </td> \
				                <td class="actinide" title="Neptunium"> \
					                <a href="' + link + 'wiki/Neptunium"> \
						                <small>93</small> \
						                <big>Np</big> \
						                <bdo>Neptunium</bdo> \
						                <bdi>237.0482</bdi> \
					                </a> \
					                <div> \
						                <p>93</p> \
						                <p>Np</p> \
						                <p>Neptunium</p> \
						                <p>237.0482</p> \
					                </div> \
				                </td> \
				                <td class="actinide" title="Plutonium"> \
					                <a href="' + link + 'wiki/Plutonium"> \
						                <small>94</small> \
						                <big>Pl</big> \
						                <bdo>Plutonium</bdo> \
						                <bdi>244.0642</bdi> \
					                </a> \
					                <div> \
						                <p>94</p> \
						                <p>Pl</p> \
						                <p>Plutonium</p> \
						                <p>244.0642</p> \
					                </div> \
				                </td> \
				                <td class="actinide" title="Americium"> \
					                <a href="' + link + 'wiki/Americium"> \
						                <small>95</small> \
						                <big>Am</big> \
						                <bdo>Americium</bdo> \
						                <bdi>243.0614</bdi> \
					                </a> \
					                <div> \
						                <p>95</p> \
						                <p>Am</p> \
						                <p>Americium</p> \
						                <p>243.0614</p> \
					                </div> \
				                </td> \
				                <td class="actinide" title="Curium"> \
					                <a href="' + link + 'wiki/Curium"> \
						                <small>96</small> \
						                <big>Cm</big> \
						                <bdo>Curium</bdo> \
						                <bdi>247.0703</bdi> \
					                </a> \
					                <div> \
						                <p>96</p> \
						                <p>Cm</p> \
						                <p>Curium</p> \
						                <p>247.0703</p> \
					                </div> \
				                </td> \
				                <td class="actinide" title="Berkelium"> \
					                <a href="' + link + 'wiki/Berkelium"> \
						                <small>97</small> \
						                <big>Bk</big> \
						                <bdo>Berkelium</bdo> \
						                <bdi>247.0703</bdi> \
					                </a> \
					                <div> \
						                <p>97</p> \
						                <p>Bk</p> \
						                <p>Berkelium</p> \
						                <p>247.0703</p> \
					                </div> \
				                </td> \
				                <td class="actinide" title="Californium"> \
					                <a href="' + link + 'wiki/Californium"> \
						                <small>98</small> \
						                <big>Cf</big> \
						                <bdo>Californium</bdo> \
						                <bdi>251.0796</bdi> \
					                </a> \
					                <div> \
						                <p>98</p> \
						                <p>Cf</p> \
						                <p>Californium</p> \
						                <p>251.0796</p> \
					                </div> \
				                </td> \
				                <td class="actinide" title="Einsteinium"> \
					                <a href="' + link + 'wiki/Einsteinium"> \
						                <small>99</small> \
						                <big>Es</big> \
						                <bdo>Einsteinium</bdo> \
						                <bdi><q>254</q></bdi> \
					                </a> \
					                <div> \
						                <p>99</p> \
						                <p>Es</p> \
						                <p>Einsteinium</p> \
						                <p><q>254</q></p> \
					                </div> \
				                </td> \
				                <td class="actinide" title="Fermium"> \
					                <a href="' + link + 'wiki/Fermium"> \
						                <small>100</small> \
						                <big>Fm</big> \
						                <bdo>Fermium</bdo> \
						                <bdi>257.0951</bdi> \
					                </a> \
					                <div> \
						                <p>100</p> \
						                <p>Fm</p> \
						                <p>Fermium</p> \
						                <p>257.0951</p> \
					                </div> \
				                </td> \
				                <td class="actinide" title="Mendelevium"> \
					                <a href="' + link + 'wiki/Mendelevium"> \
						                <small>101</small> \
						                <big>Md</big> \
						                <bdo>Mendelevium</bdo> \
						                <bdi>258.1</bdi> \
					                </a> \
					                <div> \
						                <p>101</p> \
						                <p>Md</p> \
						                <p>Mendelevium</p> \
						                <p>258.1</p> \
					                </div> \
				                </td> \
				                <td class="actinide" title="Nobelium"> \
					                <a href="' + link + 'wiki/Nobelium"> \
						                <small>102</small> \
						                <big>No</big> \
						                <bdo>Nobelium</bdo> \
						                <bdi>259.1009</bdi> \
					                </a> \
					                <div> \
						                <p>102</p> \
						                <p>No</p> \
						                <p>Nobelium</p> \
						                <p>259.1009</p> \
					                </div> \
				                </td> \
				                <td class="actinide" title="Lawrencium"> \
					                <a href="' + link + 'wiki/Lawrencium"> \
						                <small>103</small> \
						                <big>Lr</big> \
						                <bdo>Lawrencium</bdo> \
						                <bdi><q>262</q></bdi> \
					                </a> \
					                <div> \
						                <p>103</p> \
						                <p>Lr</p> \
						                <p>Lawrencium</p> \
						                <p><q>262</q></p> \
					                </div> \
				                </td> \
			                </tr> \
						</tbody> \
					</table> \
				</td> \
			</tr>';
	    tfoot.innerHTML = '<tr> \
				<td colspan="19"> \
					<a class="actinide" title="actinides" href="' + link + 'wiki/Actinide">Actinides</a> \
					<a class="alkali_metal" title="alkali metals" href="' + link + 'wiki/Alkali_metal">Alkali metals</a> \
					<a class="alkaline_metal" title="alkaline metals" href="' + link + 'wiki/Alkaline_earth_metal">Alkaline metals</a> \
					<a class="halogen" title="halogens" href="' + link + 'wiki/Halogen">Halogens</a> \
					<a class="lanthanide" title="lanthanides" href="' + link + 'wiki/Lanthanide">Lanthanides</a> \
				</td> \
			</tr> \
			<tr> \
				<td colspan="19"> \
					<a class="semi_metal" title="semi metals" href="' + link + 'wiki/Semimetal">Semi metals</a> \
					<a class="noble_gas" title="noble gases" href="' + link + 'wiki/Noble_gas">Noble gases</a> \
					<a class="nonmetal" title="nonmetals" href="' + link + 'wiki/Nonmetal">Nonmetals</a> \
					<a class="basic_metal" title="basic metals" href="' + link + 'wiki/Post-transition_metal">Basic metals</a> \
					<a class="transition_metal" title="transition metals" href="' + link + 'wiki/Transition_metal">Transition metals</a> \
				</td> \
			</tr>';
	table.append(caption).append(tbody).append(tfoot);
	table.attr("class", "parent");
	main.attr("title", "JS Table");
    main.append(figure).append(table);
	document.body.append(main);
}