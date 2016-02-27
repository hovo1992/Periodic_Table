function createBody() {
	var link = 'https://en.wikipedia.org/wiki/';
	var main = $$('main'), table = $$('table'), caption = $$('caption');
	caption.setAttribute('title', 'Periodic Table of The Elements');
	main.setAttribute('title', 'Periodic Table of The Elements');
	caption.innerText = 'Periodic Table of the Elements';
	var tbody = $$('tbody');
	var tfoot = $$('tfoot');
	tbody.innerHTML =
				'<tr>' +
					'<th id="arrow">' +
						'<p class="group">Group&#8594;</p>' +
						'<hr class="hr"/>' +
						'<p class="period">&#8595;Period</p>' +
					'</th>' +
					'<th>' +
						'1' +
						'<h4>IA</h4>' +
						'<h4>1A</h4>' +
					'</th>' +
					'<td colspan="16"></td>' +
					'<th>' +
						'18' +
						'<h4>VIIIA</h4>' +
						'<h4>8A</h4>' +
					'</th>' +
				'</tr>' +
				'<tr>' +
					'<th>1</th>' +
					'<td class="nonMetals">' +
						'<a href="' + link + 'Hydrogen" title="Hydrogen">' +
							'<ruby>' +
								'<rt>1</rt><rp>Your browser does not support ruby tag</rp>H' +
							'</ruby>' +
							'<strong>Hydrogen</strong>' +
							'<tt>1.008</tt>' +
						'</a>' +
						'<div class="nonMetals">' +
							'<ruby>' +
								'<rt>1</rt><rp>Your browser does not support ruby tag</rp>H' +
							'</ruby>' +
							'<strong>Hydrogen</strong>' +
							'<tt>1.008</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<th>' +
						'2' +
						'<h4>IIA</h4>' +
						'<h4>2A</h4>' +
					'</th>' +
					'<td class="tdHidden" colspan="10"></td>' +
					'<th>' +
						'13' +
						'<h4>IIA</h4>' +
						'<h4>2A</h4>' +
					'</th>' +
					'<th>' +
						'14' +
						'<h4>IVA</h4>' +
						'<h4>4A</h4>' +
					'</th>' +
					'<th>' +
						'15' +
						'<h4>VA</h4>' +
						'<h4>5A</h4>' +
					'</th>' +
					'<th>' +
						'16' +
						'<h4>VIA</h4>' +
						'<h4>6A</h4>' +
					'</th>' +
					'<th>' +
						'17' +
						'<h4>VIIA</h4>' +
						'<h4>7A</h4>' +
					'</th>' +
					'<td class="nobleGas">' +
						'<a href="' + link + 'Helium" title="Helium">' +
							'<ruby>' +
								'<rt>2</rt><rp>Your browser does not support ruby tag</rp>He' +
							'</ruby>' +
							'<strong>Helium</strong>' +
							'<tt>4.003</tt>' +
						'</a>' +
						'<div class="nobleGas">' +
							'<ruby>' +
								'<rt>2</rt><rp>Your browser does not support ruby tag</rp>He' +
							'</ruby>' +
							'<strong>Helium</strong>' +
							'<tt>4.003</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
				'</tr>' +
				'<tr>' +
					'<th>2</th>' +
					'<td class="alkaliMetals">' +
						'<a href="' + link + 'Lithium" title="Lithium">' +
							'<ruby>' +
								'<rt>3</rt><rp>Your browser does not support ruby tag</rp>Li' +
							'</ruby>' +
							'<strong>Lithium</strong>' +
							'<tt>6.941</tt>' +
						'</a>' +
						'<div class="alkaliMetals">' +
							'<ruby>' +
								'<rt>3</rt><rp>Your browser does not support ruby tag</rp>Li' +
							'</ruby>' +
							'<strong>Lithium</strong>' +
							'<tt>6.941</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="alkaliMetals">' +
						'<a href="' + link + 'Beryllium" title="Beryllium">' +
							'<ruby>' +
								'<rt>4</rt><rp>Your browser does not support ruby tag</rp>Be' +
							'</ruby>' +
							'<strong>Beryllium</strong>' +
							'<tt>9.012</tt>' +
						'</a>' +
						'<div class="alkaliMetals">' +
							'<ruby>' +
								'<rt>4</rt><rp>Your browser does not support ruby tag</rp>Be' +
							'</ruby>' +
							'<strong>Beryllium</strong>' +
							'<tt>9.012</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="tdHidden" colspan="10"></td>' +
					'<td class="alkaliMetals">' +
						'<a href="' + link + 'Boron" title="Boron">' +
							'<ruby>' +
								'<rt>5</rt><rp>Your browser does not support ruby tag</rp>B' +
							'</ruby>' +
							'<strong>Boron</strong>' +
							'<tt>10.811</tt>' +
						'</a>' +
						'<div class="alkaliMetals">' +
							'<ruby>' +
								'<rt>5</rt><rp>Your browser does not support ruby tag</rp>B' +
							'</ruby>' +
							'<strong>Boron</strong>' +
							'<tt>10.811</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="nonMetals">' +
						'<a href="' + link + 'Carbon" title="Carbon">' +
							'<ruby>' +
								'<rt>6</rt><rp>Your browser does not support ruby tag</rp>C' +
							'</ruby>' +
							'<strong>Carbon</strong>' +
							'<tt>12.011</tt>' +
						'</a>' +
						'<div class="nonMetals">' +
							'<ruby>' +
								'<rt>6</rt><rp>Your browser does not support ruby tag</rp>C' +
							'</ruby>' +
							'<strong>Carbon</strong>' +
							'<tt>12.011</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="nonMetals">' +
						'<a href="' + link + 'Nitrogen" title="Nitrogen">' +
							'<ruby>' +
								'<rt>7</rt><rp>Your browser does not support ruby tag</rp>N' +
							'</ruby>' +
							'<strong>Nitrogen</strong>' +
							'<tt>14.007</tt>' +
						'</a>' +
						'<div class="nonMetals">' +
							'<ruby>' +
								'<rt>7</rt><rp>Your browser does not support ruby tag</rp>N' +
							'</ruby>' +
							'<strong>Nitrogen</strong>' +
							'<tt>14.007</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="nonMetals">' +
						'<a href="' + link + 'Oxygen" title="Oxygen">' +
							'<ruby>' +
								'<rt>8</rt><rp>Your browser does not support ruby tag</rp>O' +
							'</ruby>' +
							'<strong>Oxygen</strong>' +
							'<tt>15.999</tt>' +
						'</a>' +
						'<div class="nonMetals">' +
							'<ruby>' +
								'<rt>8</rt><rp>Your browser does not support ruby tag</rp>O' +
							'</ruby>' +
							'<strong>Oxygen</strong>' +
							'<tt>15.999</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="halogens">' +
						'<a href="' + link + 'Fluorine" title="Fluorine">' +
							'<ruby>' +
								'<rt>9</rt><rp>Your browser does not support ruby tag</rp>F' +
							'</ruby>' +
							'<strong>Fluorine</strong>' +
							'<tt>18.998</tt>' +
						'</a>' +
						'<div class="halogens">' +
							'<ruby>' +
								'<rt>9</rt><rp>Your browser does not support ruby tag</rp>F' +
							'</ruby>' +
							'<strong>Fluorine</strong>' +
							'<tt>18.998</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="nobleGas">' +
						'<a href="' + link + 'Neon" title="Neon">' +
							'<ruby>' +
								'<rt>10</rt><rp>Your browser does not support ruby tag</rp>Ne' +
							'</ruby>' +
							'<strong>Neon</strong>' +
							'<tt>20.180</tt>' +
						'</a>' +
						'<div class="nobleGas">' +
							'<ruby>' +
								'<rt>10</rt><rp>Your browser does not support ruby tag</rp>Ne' +
							'</ruby>' +
							'<strong>Neon</strong>' +
							'<tt>20.180</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
				'</tr>' +
				'<tr>' +
					'<th>3</th>' +
					'<td class="alkaliMetals">' +
						'<a href="' + link + 'Sodium" title="Natrium(Sodium)">' +
							'<ruby>' +
								'<rt>11</rt><rp>Your browser does not support ruby tag</rp>Na' +
							'</ruby>' +
							'<strong>Sodium</strong>' +
							'<tt>22.990</tt>' +
						'</a>' +
						'<div class="alkaliMetals">' +
							'<ruby>' +
								'<rt>11</rt><rp>Your browser does not support ruby tag</rp>Na' +
							'</ruby>' +
							'<strong>Sodium</strong>' +
							'<tt>22.990</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="alkalineEarth">' +
						'<a href="' + link + 'Magnesium" title="Magnesium">' +
							'<ruby>' +
								'<rt>12</rt><rp>Your browser does not support ruby tag</rp>Mg' +
							'</ruby>' +
							'<strong>Magnesium</strong>' +
							'<tt>24.305</tt>' +
						'</a>' +
						'<div class="alkalineEarth">' +
							'<ruby>' +
								'<rt>12</rt><rp>Your browser does not support ruby tag</rp>Mg' +
							'</ruby>' +
							'<strong>Magnesium</strong>' +
							'<tt>24.305</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<th>' +
						'3' +
						'<h4>IIIB</h4>' +
						'<h4>3B</h4>' +
					'</th>' +
					'<th>' +
						'4' +
						'<h4>IVB</h4>' +
						'<h4>4B</h4>' +
					'</th>' +
					'<th>' +
						'5' +
						'<h4>VB</h4>' +
						'<h4>5B</h4>' +
					'</th>' +
					'<th>' +
						'6' +
						'<h4>VIB</h4>' +
						'<h4>6B</h4>' +
					'</th>' +
					'<th>' +
						'7' +
						'<h4>VIIB</h4>' +
						'<h4>7B</h4>' +
					'</th>' +
					'<th>' +
						'8' +
						'<h4>VIII</h4>' +
						'<h4>8</h4>' +
					'</th>' +
					'<th>' +
						'9' +
						'<h4>VIII</h4>' +
						'<h4>8</h4>' +
					'</th>' +
					'<th>' +
						'10' +
						'<h4>VIII</h4>' +
						'<h4>8</h4>' +
					'</th>' +
					'<th>' +
						'11' +
						'<h4>IB</h4>' +
						'<h4>1B</h4>' +
					'</th>' +
					'<th>' +
						'12' +
						'<h4>IIB</h4>' +
						'<h4>2A</h4>' +
					'</th>' +
					'<td class="basicMetal">' +
						'<a href="' + link + 'Aluminium" title="Aluminium">' +
							'<ruby>' +
								'<rt>13</rt><rp>Your browser does not support ruby tag</rp>Al' +
							'</ruby>' +
							'<strong>Aluminium</strong>' +
							'<tt>26.982</tt>' +
						'</a>' +
						'<div class="basicMetal">' +
							'<ruby>' +
								'<rt>13</rt><rp>Your browser does not support ruby tag</rp>Al' +
							'</ruby>' +
							'<strong>Aluminium</strong>' +
							'<tt>26.982</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="semiMetals">' +
						'<a href="' + link + 'Silicon" title="Silicon">' +
							'<ruby>' +
								'<rt>14</rt><rp>Your browser does not support ruby tag</rp>Si' +
							'</ruby>' +
							'<strong>Silicon</strong>' +
							'<tt>28.085</tt>' +
						'</a>' +
						'<div class="semiMetals">' +
							'<ruby>' +
								'<rt>14</rt><rp>Your browser does not support ruby tag</rp>Si' +
							'</ruby>' +
							'<strong>Silicon</strong>' +
							'<tt>28.085</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="nonMetals">' +
						'<a href="' + link + 'Phosphorus" title="Phosphorus">' +
							'<ruby>' +
								'<rt>15</rt><rp>Your browser does not support ruby tag</rp>P' +
							'</ruby>' +
							'<strong>Phosphorus</strong>' +
							'<tt>30.974</tt>' +
						'</a>' +
						'<div class="nonMetals">' +
							'<ruby>' +
								'<rt>15</rt><rp>Your browser does not support ruby tag</rp>P' +
							'</ruby>' +
							'<strong>Phosphorus</strong>' +
							'<tt>30.974</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="nonMetals">' +
						'<a href="' + link + 'Sulfur" title="Sulfur">' +
							'<ruby>' +
								'<rt>16</rt><rp>Your browser does not support ruby tag</rp>S' +
							'</ruby>' +
							'<strong>Sulfur</strong>' +
							'<tt>32.066</tt>' +
						'</a>' +
						'<div class="nonMetals">' +
							'<ruby>' +
								'<rt>16</rt><rp>Your browser does not support ruby tag</rp>S' +
							'</ruby>' +
							'<strong>Sulfur</strong>' +
							'<tt>32.066</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="halogens">' +
						'<a href="' + link + 'Clorine" title="Clorine">' +
							'<ruby>' +
								'<rt>17</rt><rp>Your browser does not support ruby tag</rp>Cl' +
							'</ruby>' +
							'<strong>Chlorine</strong>' +
							'<tt>35.453</tt>' +
						'</a>' +
						'<div class="halogens">' +
							'<ruby>' +
								'<rt>17</rt><rp>Your browser does not support ruby tag</rp>Cl' +
							'</ruby>' +
							'<strong>Chlorine</strong>' +
							'<tt>35.453</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="nobleGas">' +
						'<a href="' + link + 'Argon" title="Argon">' +
							'<ruby>' +
								'<rt>18</rt><rp>Your browser does not support ruby tag</rp>Ar' +
							'</ruby>' +
							'<strong>Argon</strong>' +
							'<tt>39.948</tt>' +
						'</a>' +
						'<div class="nobleGas">' +
							'<ruby>' +
								'<rt>18</rt><rp>Your browser does not support ruby tag</rp>Ar' +
							'</ruby>' +
							'<strong>Argon</strong>' +
							'<tt>39.948</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
				'</tr>' +
				'<tr>' +
					'<th>4</th>' +
					'<td class="alkaliMetals">' +
						'<a href="' + link + 'Potassium" title="Kalium(Potassium)">' +
							'<ruby>' +
								'<rt>19</rt><rp>Your browser does not support ruby tag</rp>K' +
							'</ruby>' +
							'<strong>Potassium</strong>' +
							'<tt>39.098</tt>' +
						'</a>' +
						'<div class="alkaliMetals">' +
							'<ruby>' +
								'<rt>19</rt><rp>Your browser does not support ruby tag</rp>K' +
							'</ruby>' +
							'<strong>Potassium</strong>' +
							'<tt>39.098</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="alkalineEarth">' +
						'<a href="' + link + 'Calcium" title="Calcium">' +
							'<ruby>' +
								'<rt>20</rt><rp>Your browser does not support ruby tag</rp>Ca' +
							'</ruby>' +
							'<strong>Calcium</strong>' +
							'<tt>40.078</tt>' +
						'</a>' +
						'<div class="alkalineEarth">' +
							'<ruby>' +
								'<rt>20</rt><rp>Your browser does not support ruby tag</rp>Ca' +
							'</ruby>' +
							'<strong>Calcium</strong>' +
							'<tt>40.078</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Scandium" title="Scandium">' +
							'<ruby>' +
								'<rt>21</rt><rp>Your browser does not support ruby tag</rp>Sc' +
							'</ruby>' +
							'<strong>Scandium</strong>' +
							'<tt>44.956</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>21</rt><rp>Your browser does not support ruby tag</rp>Sc' +
							'</ruby>' +
							'<strong>Scandium</strong>' +
							'<tt>44.956</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Titanium" title="Titanium">' +
							'<ruby>' +
								'<rt>22</rt><rp>Your browser does not support ruby tag</rp>Ti' +
							'</ruby>' +
							'<strong>Titanium</strong>' +
							'<tt>47.867</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>22</rt><rp>Your browser does not support ruby tag</rp>Ti' +
							'</ruby>' +
							'<strong>Titanium</strong>' +
							'<tt>47.867</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Vanadium" title="Vanadium">' +
							'<ruby>' +
								'<rt>23</rt><rp>Your browser does not support ruby tag</rp>V' +
							'</ruby>' +
							'<strong>Vanadium</strong>' +
							'<tt>50.942</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>23</rt><rp>Your browser does not support ruby tag</rp>V' +
							'</ruby>' +
							'<strong>Vanadium</strong>' +
							'<tt>50.942</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Chromium" title="Chromium">' +
							'<ruby>' +
								'<rt>24</rt><rp>Your browser does not support ruby tag</rp>Cr' +
							'</ruby>' +
							'<strong>Chromium</strong>' +
							'<tt>51.996</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>24</rt><rp>Your browser does not support ruby tag</rp>Cr' +
							'</ruby>' +
							'<strong>Chromium</strong>' +
							'<tt>51.996</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Manganese" title="Manganese">' +
							'<ruby>' +
								'<rt>25</rt><rp>Your browser does not support ruby tag</rp>Mn' +
							'</ruby>' +
							'<strong>Manganese</strong>' +
							'<tt>54.938</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>25</rt><rp>Your browser does not support ruby tag</rp>Mn' +
							'</ruby>' +
							'<strong>Manganese</strong>' +
							'<tt>54.938</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Iron" title=" Ferrum(Iron)">' +
							'<ruby>' +
								'<rt>26</rt><rp>Your browser does not support ruby tag</rp>Fe' +
							'</ruby>' +
							'<strong>Iron</strong>' +
							'<tt>55.845</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>26</rt><rp>Your browser does not support ruby tag</rp>Fe' +
							'</ruby>' +
							'<strong>Iron</strong>' +
							'<tt>55.845</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Cobalt" title="Cobalt">' +
							'<ruby>' +
								'<rt>27</rt><rp>Your browser does not support ruby tag</rp>Co' +
							'</ruby>' +
							'<strong>Cobalt</strong>' +
							'<tt>58.933</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>27</rt><rp>Your browser does not support ruby tag</rp>Co' +
							'</ruby>' +
							'<strong>Cobalt</strong>' +
							'<tt>58.933</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Nickel" title="Nickel">' +
							'<ruby>' +
								'<rt>28</rt><rp>Your browser does not support ruby tag</rp>Ni' +
							'</ruby>' +
							'<strong>Nickel</strong>' +
							'<tt>58.693</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>28</rt><rp>Your browser does not support ruby tag</rp>Ni' +
							'</ruby>' +
							'<strong>Nickel</strong>' +
							'<tt>58.693</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Copper" title="Copper">' +
							'<ruby>' +
								'<rt>29</rt><rp>Your browser does not support ruby tag</rp>Cu' +
							'</ruby>' +
							'<strong>Copper</strong>' +
							'<tt>63.546</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>29</rt><rp>Your browser does not support ruby tag</rp>Cu' +
							'</ruby>' +
							'<strong>Copper</strong>' +
							'<tt>63.546</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Zinc" title="Zinc">' +
							'<ruby>' +
								'<rt>30</rt><rp>Your browser does not support ruby tag</rp>Zi' +
							'</ruby>' +
							'<strong>Zinc</strong>' +
							'<tt>65.380</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>30</rt><rp>Your browser does not support ruby tag</rp>Zi' +
							'</ruby>' +
							'<strong>Zinc</strong>' +
							'<tt>65.380</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="basicMetal">' +
						'<a href="' + link + 'Gallium" title="Gallium">' +
							'<ruby>' +
								'<rt>31</rt><rp>Your browser does not support ruby tag</rp>Ga' +
							'</ruby>' +
							'<strong>Gallium</strong>' +
							'<tt>69.723</tt>' +
						'</a>' +
						'<div class="basicMetal">' +
							'<ruby>' +
								'<rt>31</rt><rp>Your browser does not support ruby tag</rp>Ga' +
							'</ruby>' +
							'<strong>Gallium</strong>' +
							'<tt>69.723</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="semiMetals">' +
						'<a href="' + link + 'Germanium" title="Germanium">' +
							'<ruby>' +
								'<rt>32</rt><rp>Your browser does not support ruby tag</rp>Ge' +
							'</ruby>' +
							'<strong>Germanium</strong>' +
							'<tt>72.630</tt>' +
						'</a>' +
						'<div class="semiMetals">' +
							'<ruby>' +
								'<rt>32</rt><rp>Your browser does not support ruby tag</rp>Ge' +
							'</ruby>' +
							'<strong>Germanium</strong>' +
							'<tt>72.630</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="semiMetals">' +
						'<a href="' + link + 'Arsenic" title="Arsenic">' +
							'<ruby>' +
								'<rt>33</rt><rp>Your browser does not support ruby tag</rp>As' +
							'</ruby>' +
							'<strong>Arsenic</strong>' +
							'<tt>74.922</tt>' +
						'</a>' +
						'<div class="semiMetals">' +
							'<ruby>' +
								'<rt>33</rt><rp>Your browser does not support ruby tag</rp>As' +
							'</ruby>' +
							'<strong>Arsenic</strong>' +
							'<tt>74.922</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="nonMetals">' +
						'<a href="' + link + 'Selenium" title="Selenium">' +
							'<ruby>' +
								'<rt>34</rt><rp>Your browser does not support ruby tag</rp>Se' +
							'</ruby>' +
							'<strong>Selenium</strong>' +
							'<tt>78.971</tt>' +
						'</a>' +
						'<div class="nonMetals">' +
							'<ruby>' +
								'<rt>34</rt><rp>Your browser does not support ruby tag</rp>Se' +
							'</ruby>' +
							'<strong>Selenium</strong>' +
							'<tt>78.971</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="halogens">' +
						'<a href="' + link + 'Bromine" title="Bromine">' +
							'<ruby>' +
								'<rt>35</rt><rp>Your browser does not support ruby tag</rp>Br' +
							'</ruby>' +
							'<strong>Bromine</strong>' +
							'<tt>79.904</tt>' +
						'</a>' +
						'<div class="halogens">' +
							'<ruby>' +
								'<rt>35</rt><rp>Your browser does not support ruby tag</rp>Br' +
							'</ruby>' +
							'<strong>Bromine</strong>' +
							'<tt>79.904</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="nobleGas">' +
						'<a href="' + link + 'Krypton" title="Krypton">' +
							'<ruby>' +
								'<rt>36</rt><rp>Your browser does not support ruby tag</rp>Kr' +
							'</ruby>' +
							'<strong>Krypton</strong>' +
							'<tt>83.798</tt>' +
						'</a>' +
						'<div class="nobleGas">' +
							'<ruby>' +
								'<rt>36</rt><rp>Your browser does not support ruby tag</rp>Kr' +
							'</ruby>' +
							'<strong>Krypton</strong>' +
							'<tt>83.798</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
				'</tr>' +
				'<tr>' +
					'<th>5</th>' +
					'<td class="alkaliMetals">' +
						'<a href="' + link + 'Rubidium" title="Rubidium">' +
							'<ruby>' +
								'<rt>37</rt><rp>Your browser does not support ruby tag</rp>Rb' +
							'</ruby>' +
							'<strong>Rubidium</strong>' +
							'<tt>85.468</tt>' +
						'</a>' +
						'<div class="alkaliMetals">' +
							'<ruby>' +
								'<rt>37</rt><rp>Your browser does not support ruby tag</rp>Rb' +
							'</ruby>' +
							'<strong>Rubidium</strong>' +
							'<tt>85.468</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="alkalineEarth">' +
						'<a href="' + link + 'Strontium" title="Strontium">' +
							'<ruby>' +
								'<rt>38</rt><rp>Your browser does not support ruby tag</rp>Sr' +
							'</ruby>' +
							'<strong>Strontium</strong>' +
							'<tt>87.620</tt>' +
						'</a>' +
						'<div class="alkalineEarth">' +
							'<ruby>' +
								'<rt>38</rt><rp>Your browser does not support ruby tag</rp>Sr' +
							'</ruby>' +
							'<strong>Strontium</strong>' +
							'<tt>87.620</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Yttrium" title="Yttrium">' +
							'<ruby>' +
								'<rt>39</rt><rp>Your browser does not support ruby tag</rp>Y' +
							'</ruby>' +
							'<strong>Yttrium</strong>' +
							'<tt>88.906</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>39</rt><rp>Your browser does not support ruby tag</rp>Y' +
							'</ruby>' +
							'<strong>Yttrium</strong>' +
							'<tt>88.906</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Zirconium" title="Zirconium">' +
							'<ruby>' +
								'<rt>40</rt><rp>Your browser does not support ruby tag</rp>Zr' +
							'</ruby>' +
							'<strong>Zirconium</strong>' +
							'<tt>91.224</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>40</rt><rp>Your browser does not support ruby tag</rp>Zr' +
							'</ruby>' +
							'<strong>Zirconium</strong>' +
							'<tt>91.224</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Niobium" title="Niobium">' +
							'<ruby>' +
								'<rt>41</rt><rp>Your browser does not support ruby tag</rp>Ni' +
							'</ruby>' +
							'<strong>Niobium</strong>' +
							'<tt>92.906</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>41</rt><rp>Your browser does not support ruby tag</rp>Ni' +
							'</ruby>' +
							'<strong>Niobium</strong>' +
							'<tt>92.906</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Molybdenum" title="Molybdenum">' +
							'<ruby>' +
								'<rt>42</rt><rp>Your browser does not support ruby tag</rp>Mo' +
							'</ruby>' +
							'<strong>Molybdenum</strong>' +
							'<tt>95.950</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>42</rt><rp>Your browser does not support ruby tag</rp>Mo' +
							'</ruby>' +
							'<strong>Molybdenum</strong>' +
							'<tt>95.950</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Technetium" title="Technetium">' +
							'<ruby>' +
								'<rt>43</rt><rp>Your browser does not support ruby tag</rp>Tc' +
							'</ruby>' +
							'<strong>Technetium</strong>' +
							'<tt><q>98</q></tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>43</rt><rp>Your browser does not support ruby tag</rp>Tc' +
							'</ruby>' +
							'<strong>Technetium</strong>' +
							'<tt><q>98</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Ruthenium" title="Ruthenium">' +
							'<ruby>' +
								'<rt>44</rt><rp>Your browser does not support ruby tag</rp>Ru' +
							'</ruby>' +
							'<strong>Ruthenium</strong>' +
							'<tt>101.070</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>44</rt><rp>Your browser does not support ruby tag</rp>Ru' +
							'</ruby>' +
							'<strong>Ruthenium</strong>' +
							'<tt>101.070</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Rhodium" title="Rhodium">' +
							'<ruby>' +
								'<rt>45</rt><rp>Your browser does not support ruby tag</rp>Rh' +
							'</ruby>' +
							'<strong>Rhodium</strong>' +
							'<tt>102.906</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>45</rt><rp>Your browser does not support ruby tag</rp>Rh' +
							'</ruby>' +
							'<strong>Rhodium</strong>' +
							'<tt>102.906</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Palladium" title="Palladium">' +
							'<ruby>' +
								'<rt>46</rt><rp>Your browser does not support ruby tag</rp>Pd' +
							'</ruby>' +
							'<strong>Palladium</strong>' +
							'<tt>106.420</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>46</rt><rp>Your browser does not support ruby tag</rp>Pd' +
							'</ruby>' +
							'<strong>Palladium</strong>' +
							'<tt>106.420</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Silver" title="Argentum(Silver)">' +
							'<ruby>' +
								'<rt>47</rt><rp>Your browser does not support ruby tag</rp>Ag' +
							'</ruby>' +
							'<strong>Silver</strong>' +
							'<tt>107.868</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>47</rt><rp>Your browser does not support ruby tag</rp>Ag' +
							'</ruby>' +
							'<strong>Silver</strong>' +
							'<tt>107.868</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Cadmium" title="Cadmium">' +
							'<ruby>' +
								'<rt>48</rt><rp>Your browser does not support ruby tag</rp>Cd' +
							'</ruby>' +
							'<strong>Cadmium</strong>' +
							'<tt>112.414</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>48</rt><rp>Your browser does not support ruby tag</rp>Cd' +
							'</ruby>' +
							'<strong>Cadmium</strong>' +
							'<tt>112.414</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="basicMetal">' +
						'<a href="' + link + 'Indium" title="Indium">' +
							'<ruby>' +
								'<rt>49</rt><rp>Your browser does not support ruby tag</rp>In' +
							'</ruby>' +
							'<strong>Indium</strong>' +
							'<tt>114.818</tt>' +
						'</a>' +
						'<div class="basicMetal">' +
							'<ruby>' +
								'<rt>49</rt><rp>Your browser does not support ruby tag</rp>In' +
							'</ruby>' +
							'<strong>Indium</strong>' +
							'<tt>114.818</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="basicMetal">' +
						'<a href="' + link + 'Tin" title="Stannum(Tin)">' +
							'<ruby>' +
								'<rt>50</rt><rp>Your browser does not support ruby tag</rp>Sn' +
							'</ruby>' +
							'<strong>Tin</strong>' +
							'<tt>118.710</tt>' +
						'</a>' +
						'<div class="basicMetal">' +
							'<ruby>' +
								'<rt>50</rt><rp>Your browser does not support ruby tag</rp>Sn' +
							'</ruby>' +
							'<strong>Tin</strong>' +
							'<tt>118.710</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="semiMetals">' +
						'<a href="' + link + 'Antimony" title="Stibium(Antimony)">' +
							'<ruby>' +
								'<rt>51</rt><rp>Your browser does not support ruby tag</rp>Sb' +
							'</ruby>' +
							'<strong>Antimony</strong>' +
							'<tt>121.760</tt>' +
						'</a>' +
						'<div class="semiMetals">' +
							'<ruby>' +
								'<rt>51</rt><rp>Your browser does not support ruby tag</rp>Sb' +
							'</ruby>' +
							'<strong>Antimony</strong>' +
							'<tt>121.760</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="semiMetals">' +
						'<a href="' + link + 'Tellurium" title="Tellurium">' +
							'<ruby>' +
								'<rt>52</rt><rp>Your browser does not support ruby tag</rp>Te' +
							'</ruby>' +
							'<strong>Tellurium</strong>' +
							'<tt>127.600</tt>' +
						'</a>' +
						'<div class="semiMetals">' +
							'<ruby>' +
								'<rt>52</rt><rp>Your browser does not support ruby tag</rp>Te' +
							'</ruby>' +
							'<strong>Tellurium</strong>' +
							'<tt>127.600</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="halogens">' +
						'<a href="' + link + 'Iodine" title="Iodine">' +
							'<ruby>' +
								'<rt>53</rt><rp>Your browser does not support ruby tag</rp>I' +
							'</ruby>' +
							'<strong>Iodine</strong>' +
							'<tt>126.905</tt>' +
						'</a>' +
						'<div class="halogens">' +
							'<ruby>' +
								'<rt>53</rt><rp>Your browser does not support ruby tag</rp>I' +
							'</ruby>' +
							'<strong>Iodine</strong>' +
							'<tt>126.905</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="nobleGas">' +
						'<a href="' + link + 'Xenon" title="Xenon">' +
							'<ruby>' +
								'<rt>54</rt><rp>Your browser does not support ruby tag</rp>Xe' +
							'</ruby>' +
							'<strong>Xenon</strong>' +
							'<tt>131.294</tt>' +
						'</a>' +
						'<div class="nobleGas">' +
							'<ruby>' +
								'<rt>54</rt><rp>Your browser does not support ruby tag</rp>Xe' +
							'</ruby>' +
							'<strong>Xenon</strong>' +
							'<tt>131.294</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
				'</tr>' +
				'<tr>' +
					'<th>6</th>' +
					'<td class="alkaliMetals">' +
						'<a href="' + link + 'Caesium" title="Caesium">' +
							'<ruby>' +
								'<rt>55</rt><rp>Your browser does not support ruby tag</rp>Cs' +
							'</ruby>' +
							'<strong>Caesium</strong>' +
							'<tt>132.906</tt>' +
						'</a>' +
						'<div class="alkaliMetals">' +
							'<ruby>' +
								'<rt>55</rt><rp>Your browser does not support ruby tag</rp>Cs' +
							'</ruby>' +
							'<strong>Caesium</strong>' +
							'<tt>132.906</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="alkalineEarth">' +
						'<a href="' + link + 'Barium" title="Barium">' +
							'<ruby>' +
								'<rt>56</rt><rp>Your browser does not support ruby tag</rp>Ba' +
							'</ruby>' +
							'<strong>Barium</strong>' +
							'<tt>137.327</tt>' +
						'</a>' +
						'<div class="alkalineEarth">' +
							'<ruby>' +
								'<rt>56</rt><rp>Your browser does not support ruby tag</rp>Ba' +
							'</ruby>' +
							'<strong>Barium</strong>' +
							'<tt>137.327</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="lanthanides">' +
						'<a href="' + link + 'Lanthanide" title="Lanthanides">' +
							'<ruby>' +
								'<rt class="rtPosit">57-71</rt><rp>Your browser does not support ruby tag</rp>' +
							'</ruby>' +
							'<strong>Lanthanides</strong>' +
						'</a>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Hafnium" title="Hafnium">' +
							'<ruby>' +
								'<rt>72</rt><rp>Your browser does not support ruby tag</rp>Hf' +
							'</ruby>' +
							'<strong>Hafnium</strong>' +
							'<tt>178.490</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>72</rt><rp>Your browser does not support ruby tag</rp>Hf' +
							'</ruby>' +
							'<strong>Hafnium</strong>' +
							'<tt>178.490</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Tantalum" title="Tantalum">' +
							'<ruby>' +
								'<rt>73</rt><rp>Your browser does not support ruby tag</rp>Ta' +
							'</ruby>' +
							'<strong>Tantalum</strong>' +
							'<tt>180.948</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>73</rt><rp>Your browser does not support ruby tag</rp>Ta' +
							'</ruby>' +
							'<strong>Tantalum</strong>' +
							'<tt>180.948</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Tungsten" title="Wolfram(Tungsten)">' +
							'<ruby>' +
								'<rt>74</rt><rp>Your browser does not support ruby tag</rp>W' +
							'</ruby>' +
							'<strong>Tungsten</strong>' +
							'<tt>183.840</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>74</rt><rp>Your browser does not support ruby tag</rp>W' +
							'</ruby>' +
							'<strong>Tungsten</strong>' +
							'<tt>183.840</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Rhenium" title="Rhenium">' +
							'<ruby>' +
								'<rt>75</rt><rp>Your browser does not support ruby tag</rp>Rh' +
							'</ruby>' +
							'<strong>Rhenium</strong>' +
							'<tt>186.207</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>75</rt><rp>Your browser does not support ruby tag</rp>Rh' +
							'</ruby>' +
							'<strong>Rhenium</strong>' +
							'<tt>186.207</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Osmium" title="Osmium">' +
							'<ruby>' +
								'<rt>76</rt><rp>Your browser does not support ruby tag</rp>Os' +
							'</ruby>' +
							'<strong>Osmium</strong>' +
							'<tt>190.230</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>76</rt><rp>Your browser does not support ruby tag</rp>Os' +
							'</ruby>' +
							'<strong>Osmium</strong>' +
							'<tt>190.230</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Iridium" title="Iridium">' +
							'<ruby>' +
								'<rt>77</rt><rp>Your browser does not support ruby tag</rp>Ir' +
							'</ruby>' +
							'<strong>Iridium</strong>' +
							'<tt>192.217</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>77</rt><rp>Your browser does not support ruby tag</rp>Ir' +
							'</ruby>' +
							'<strong>Iridium</strong>' +
							'<tt>192.217</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Platinum" title="Platinum">' +
							'<ruby>' +
								'<rt>78</rt><rp>Your browser does not support ruby tag</rp>Pt' +
							'</ruby>' +
							'<strong>Platinum</strong>' +
							'<tt>195.084</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>78</rt><rp>Your browser does not support ruby tag</rp>Pt' +
							'</ruby>' +
							'<strong>Platinum</strong>' +
							'<tt>195.084</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Gold" title="Aurum(Gold)">' +
							'<ruby>' +
								'<rt>79</rt><rp>Your browser does not support ruby tag</rp>Au' +
							'</ruby>' +
							'<strong>Gold</strong>' +
							'<tt>196.967</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>74</rt><rp>Your browser does not support ruby tag</rp>W' +
							'</ruby>' +
							'<strong>Tungsten</strong>' +
							'<tt>183.840</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="Mercury_(element)" title="Hydrargyrum(Mercury)">' +
							'<ruby>' +
								'<rt>80</rt><rp>Your browser does not support ruby tag</rp>Hg' +
							'</ruby>' +
							'<strong>Mercury</strong>' +
							'<tt>200.592</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>80</rt><rp>Your browser does not support ruby tag</rp>Hg' +
							'</ruby>' +
							'<strong>Mercury</strong>' +
							'<tt>200.592</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="basicMetal">' +
						'<a href="' + link + 'Thallium" title="Thallium">' +
							'<ruby>' +
								'<rt>81</rt><rp>Your browser does not support ruby tag</rp>Ti' +
							'</ruby>' +
							'<strong>Thallium</strong>' +
							'<tt>204.383</tt>' +
						'</a>' +
						'<div class="basicMetal">' +
							'<ruby>' +
								'<rt>81</rt><rp>Your browser does not support ruby tag</rp>Ti' +
							'</ruby>' +
							'<strong>Thallium</strong>' +
							'<tt>204.383</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="basicMetal">' +
						'<a href="' + link + 'Lead" title="Plumbum(Lead)">' +
							'<ruby>' +
								'<rt>82</rt><rp>Your browser does not support ruby tag</rp>Pb' +
							'</ruby>' +
							'<strong>Lead</strong>' +
							'<tt>207.200</tt>' +
						'</a>' +
						'<div class="basicMetal">' +
							'<ruby>' +
								'<rt>82</rt><rp>Your browser does not support ruby tag</rp>Pb' +
							'</ruby>' +
							'<strong>Lead</strong>' +
							'<tt>207.200</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="basicMetal">' +
						'<a href="' + link + 'Bismuth" title="Bismuth">' +
							'<ruby>' +
								'<rt>83</rt><rp>Your browser does not support ruby tag</rp>Bi' +
							'</ruby>' +
							'<strong>Bismuth</strong>' +
							'<tt>208.980</tt>' +
						'</a>' +
						'<div class="basicMetal">' +
							'<ruby>' +
								'<rt>83</rt><rp>Your browser does not support ruby tag</rp>Bi' +
							'</ruby>' +
							'<strong>Bismuth</strong>' +
							'<tt>208.980</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="semiMetals">' +
						'<a href="' + link + 'Polonium" title="Polonium">' +
							'<ruby>' +
								'<rt>84</rt><rp>Your browser does not support ruby tag</rp>Po' +
							'</ruby>' +
							'<strong>Polonium</strong>' +
							'<tt>209</tt>' +
						'</a>' +
						'<div class="semiMetals">' +
							'<ruby>' +
								'<rt>84</rt><rp>Your browser does not support ruby tag</rp>Po' +
							'</ruby>' +
							'<strong>Polonium</strong>' +
							'<tt><q class="bracket">209</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="halogens">' +
						'<a href="' + link + 'Astatine" title="Astatine">' +
							'<ruby>' +
								'<rt>85</rt><rp>Your browser does not support ruby tag</rp>At' +
							'</ruby>' +
							'<strong>Astatine</strong>' +
							'<tt>210</tt>' +
						'</a>' +
						'<div class="halogens">' +
							'<ruby>' +
								'<rt>85</rt><rp>Your browser does not support ruby tag</rp>At' +
							'</ruby>' +
							'<strong>Astatine</strong>' +
							'<tt><q class="bracket">210</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="nobleGas">' +
						'<a href="' + link + 'Radon" title="Radon">' +
							'<ruby>' +
								'<rt>86</rt><rp>Your browser does not support ruby tag</rp>Rn' +
							'</ruby>' +
							'<strong>Radon</strong>' +
							'<tt>222</tt>' +
						'</a>' +
						'<div class="nobleGas">' +
							'<ruby>' +
								'<rt>86</rt><rp>Your browser does not support ruby tag</rp>Rn' +
							'</ruby>' +
							'<strong>Radon</strong>' +
							'<tt><q class="bracket">222</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
				'</tr>' +
				'<tr>' +
					'<th>7</th>' +
					'<td class="alkaliMetals">' +
						'<a href="' + link + 'Francium" title="Francium">' +
							'<ruby>' +
								'<rt>87</rt><rp>Your browser does not support ruby tag</rp>Fr' +
							'</ruby>' +
							'<strong>Francium</strong>' +
							'<tt>223</tt>' +
						'</a>' +
						'<div class="alkaliMetals">' +
							'<ruby>' +
								'<rt>87</rt><rp>Your browser does not support ruby tag</rp>Fr' +
							'</ruby>' +
							'<strong>Francium</strong>' +
							'<tt><q class="bracket">223</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="alkalineEarth">' +
						'<a href="' + link + 'Radium" title="Radium">' +
							'<ruby>' +
								'<rt>88</rt><rp>Your browser does not support ruby tag</rp>Ra' +
							'</ruby>' +
							'<strong>Radium</strong>' +
							'<tt>226</tt>' +
						'</a>' +
						'<div class="alkalineEarth">' +
							'<ruby>' +
								'<rt>88</rt><rp>Your browser does not support ruby tag</rp>Ra' +
							'</ruby>' +
							'<strong>Radium</strong>' +
							'<tt><q class="bracket">226</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="actinides">' +
						'<a href="' + link + 'Actinide" title="Actinides">' +
							'<ruby>' +
								'<rt class="rtPosit">89-103</rt><rp>Your browser does not support ruby tag</rp>' +
							'</ruby>' +
							'<strong>Actinides</strong>' +
						'</a>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Rutherfordium" title="Rutherfordium">' +
							'<ruby>' +
								'<rt>104</rt><rp>Your browser does not support ruby tag</rp>Rf' +
							'</ruby>' +
							'<strong>Rutherfordium</strong>' +
							'<tt>267</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>104</rt><rp>Your browser does not support ruby tag</rp>Rf' +
							'</ruby>' +
							'<strong>Rutherfordium</strong>' +
							'<tt><q>267</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Dubnium" title="Dubnium">' +
							'<ruby>' +
								'<rt>105</rt><rp>Your browser does not support ruby tag</rp>Db' +
							'</ruby>' +
							'<strong>Dubnium</strong>' +
							'<tt>268</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>105</rt><rp>Your browser does not support ruby tag</rp>Db' +
							'</ruby>' +
							'<strong>Dubnium</strong>' +
							'<tt><q>268</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Seaborgium" title="Seaborgium">' +
							'<ruby>' +
								'<rt>106</rt><rp>Your browser does not support ruby tag</rp>Se' +
							'</ruby>' +
							'<strong>Seaborgium</strong>' +
							'<tt>269</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>106</rt><rp>Your browser does not support ruby tag</rp>Se' +
							'</ruby>' +
							'<strong>Seaborgium</strong>' +
							'<tt><q>269</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Bohrium" title="Bohrium">' +
							'<ruby>' +
								'<rt>107</rt><rp>Your browser does not support ruby tag</rp>Bh' +
							'</ruby>' +
							'<strong>Bohrium</strong>' +
							'<tt>270</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>107</rt><rp>Your browser does not support ruby tag</rp>Bh' +
							'</ruby>' +
							'<strong>Bohrium</strong>' +
							'<tt><q>270</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Hassium" title="Hassium">' +
							'<ruby>' +
								'<rt>108</rt><rp>Your browser does not support ruby tag</rp>Hs' +
							'</ruby>' +
							'<strong>Hassium</strong>' +
							'<tt>269</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>108</rt><rp>Your browser does not support ruby tag</rp>Hs' +
							'</ruby>' +
							'<strong>Hassium</strong>' +
							'<tt><q>269</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Meitnerium" title="Meitnerium">' +
							'<ruby>' +
								'<rt>109</rt><rp>Your browser does not support ruby tag</rp>Mt' +
							'</ruby>' +
							'<strong>Meitnerium</strong>' +
							'<tt>278</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>109</rt><rp>Your browser does not support ruby tag</rp>Mt' +
							'</ruby>' +
							'<strong>Meitnerium</strong>' +
							'<tt><q>278</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Darmstadtium" title="Darmstadtium">' +
							'<ruby>' +
								'<rt>110</rt><rp>Your browser does not support ruby tag</rp>Ds' +
							'</ruby>' +
							'<strong>Darmstadtium</strong>' +
							'<tt>281</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>110</rt><rp>Your browser does not support ruby tag</rp>Ds' +
							'</ruby>' +
							'<strong>Darmstadtium</strong>' +
							'<tt><q>281</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Roentgenium" title="Roentgenium">' +
							'<ruby>' +
								'<rt>111</rt><rp>Your browser does not support ruby tag</rp>Rg' +
							'</ruby>' +
							'<strong>Roentgenium</strong>' +
							'<tt>282</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>111</rt><rp>Your browser does not support ruby tag</rp>Rg' +
							'</ruby>' +
							'<strong>Roentgenium</strong>' +
							'<tt><q>282</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="transitMetals">' +
						'<a href="' + link + 'Copernicium" title="Copernicium">' +
							'<ruby>' +
								'<rt>112</rt><rp>Your browser does not support ruby tag</rp>Cn' +
							'</ruby>' +
							'<strong>Copernicium</strong>' +
							'<tt>285</tt>' +
						'</a>' +
						'<div class="transitMetals">' +
							'<ruby>' +
								'<rt>112</rt><rp>Your browser does not support ruby tag</rp>Cn' +
							'</ruby>' +
							'<strong>Copernicium</strong>' +
							'<tt><q>285</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="basicMetal">' +
						'<a href="' + link + 'Ununtrium" title="Ununtrium">' +
							'<ruby>' +
								'<rt>113</rt><rp>Your browser does not support ruby tag</rp>Uut' +
							'</ruby>' +
							'<strong>Ununtrium</strong>' +
							'<tt>286</tt>' +
						'</a>' +
						'<div class="basicMetal">' +
							'<ruby>' +
								'<rt>113</rt><rp>Your browser does not support ruby tag</rp>Uut' +
							'</ruby>' +
							'<strong>Ununtrium</strong>' +
							'<tt><q>286</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="basicMetal">' +
						'<a href="' + link + 'Flerovium" title="Flerovium">' +
							'<ruby>' +
								'<rt>114</rt><rp>Your browser does not support ruby tag</rp>Fl' +
							'</ruby>' +
							'<strong>Flerovium</strong>' +
							'<tt>289</tt>' +
						'</a>' +
						'<div class="basicMetal">' +
							'<ruby>' +
								'<rt>114</rt><rp>Your browser does not support ruby tag</rp>Fl' +
							'</ruby>' +
							'<strong>Flerovium</strong>' +
							'<tt><q>289</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="basicMetal">' +
						'<a href="' + link + 'Ununpentium" title="Ununpentium">' +
							'<ruby>' +
								'<rt>115</rt><rp>Your browser does not support ruby tag</rp>Uup' +
							'</ruby>' +
							'<strong>Ununpentium</strong>' +
							'<tt>289</tt>' +
						'</a>' +
						'<div class="basicMetal">' +
							'<ruby>' +
								'<rt>115</rt><rp>Your browser does not support ruby tag</rp>Uup' +
							'</ruby>' +
							'<strong>Ununpentium</strong>' +
							'<tt><q>289</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="basicMetal">' +
						'<a href="' + link + 'Livermorium" title="Livermorium">' +
							'<ruby>' +
								'<rt>116</rt><rp>Your browser does not support ruby tag</rp>Lv' +
							'</ruby>' +
							'<strong>Livermorium</strong>' +
							'<tt>293</tt>' +
						'</a>' +
						'<div class="basicMetal">' +
							'<ruby>' +
								'<rt>116</rt><rp>Your browser does not support ruby tag</rp>Lv' +
							'</ruby>' +
							'<strong>Livermorium</strong>' +
							'<tt><q>293</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="halogens">' +
						'<a href="' + link + 'Ununseptium" title="Ununseptium">' +
							'<ruby>' +
								'<rt>117</rt><rp>Your browser does not support ruby tag</rp>Uus' +
							'</ruby>' +
							'<strong>Ununseptium</strong>' +
							'<tt>294</tt>' +
						'</a>' +
						'<div class="halogens">' +
							'<ruby>' +
								'<rt>117</rt><rp>Your browser does not support ruby tag</rp>Uus' +
							'</ruby>' +
							'<strong>Ununseptium</strong>' +
							'<tt><q>294</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="nobleGas">' +
						'<a href="' + link + 'Ununoctium" title="Ununoctium">' +
							'<ruby>' +
								'<rt>118</rt><rp>Your browser does not support ruby tag</rp>Uuo' +
							'</ruby>' +
							'<strong>Ununoctium</strong>' +
							'<tt>294</tt>' +
						'</a>' +
						'<div class="nobleGas">' +
							'<ruby>' +
								'<rt>118</rt><rp>Your browser does not support ruby tag</rp>Uuo' +
								'</ruby>' +
								'<strong>Ununoctium</strong>' +
								'<tt><q>294</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
						'</td>' +
					'</tr>' +
					'<tr></tr>';
	tfoot.innerHTML =
				'<tr>' +
					'<td></td>' +
					'<th class="lanthActin" colspan="2">Lanthanides</th>' +
					'<td class="lanthanides">' +
						'<a href="' + link + 'Lanthanum" title="Lanthanum">' +
							'<ruby>' +
								'<rt>57</rt><rp>Your browser does not support ruby tag</rp>La' +
							'</ruby>' +
							'<strong>Lanthanum</strong>' +
							'<tt>138.906</tt>' +
						'</a>' +
						'<div class="lanthanides">' +
							'<ruby>' +
								'<rt>57</rt><rp>Your browser does not support ruby tag</rp>La' +
							'</ruby>' +
							'<strong>Lanthanum</strong>' +
							'<tt>138.906</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="lanthanides">' +
						'<a href="' + link + 'Cerium" title="Cerium">' +
							'<ruby>' +
								'<rt>58</rt><rp>Your browser does not support ruby tag</rp>Ce' +
							'</ruby>' +
							'<strong>Cerium</strong>' +
							'<tt>140.116</tt>' +
						'</a>' +
						'<div class="lanthanides">' +
							'<ruby>' +
								'<rt>58</rt><rp>Your browser does not support ruby tag</rp>Ce' +
							'</ruby>' +
							'<strong>Cerium</strong>' +
							'<tt>140.116</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="lanthanides">' +
						'<a href="' + link + 'Praseodymium" title="Praseodymium">' +
							'<ruby>' +
								'<rt>59</rt><rp>Your browser does not support ruby tag</rp>Pr' +
							'</ruby>' +
							'<strong>Praseodymium</strong>' +
							'<tt>140.908</tt>' +
						'</a>' +
						'<div class="lanthanides">' +
							'<ruby>' +
								'<rt>59</rt><rp>Your browser does not support ruby tag</rp>Pr' +
							'</ruby>' +
							'<strong>Praseodymium</strong>' +
							'<tt>140.908</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="lanthanides">' +
						'<a href="' + link + 'Neodymium" title="Neodymium">' +
							'<ruby>' +
								'<rt>60</rt><rp>Your browser does not support ruby tag</rp>Nd' +
							'</ruby>' +
							'<strong>Neodymium</strong>' +
							'<tt>144.242</tt>' +
						'</a>' +
						'<div class="lanthanides">' +
							'<ruby>' +
								'<rt>60</rt><rp>Your browser does not support ruby tag</rp>Nd' +
							'</ruby>' +
							'<strong>Neodymium</strong>' +
							'<tt>144.242</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="lanthanides">' +
						'<a href="' + link + 'Promethium" title="Promethium">' +
							'<ruby>' +
								'<rt>61</rt><rp>Your browser does not support ruby tag</rp>Pm' +
							'</ruby>' +
							'<strong>Promethium</strong>' +
							'<tt>145</tt>' +
						'</a>' +
						'<div class="lanthanides">' +
							'<ruby>' +
								'<rt>61</rt><rp>Your browser does not support ruby tag</rp>Pm' +
							'</ruby>' +
							'<strong>Promethium</strong>' +
							'<tt><q>145</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="lanthanides">' +
						'<a href="' + link + 'Samarium" title="Samarium">' +
							'<ruby>' +
								'<rt>62</rt><rp>Your browser does not support ruby tag</rp>Sm' +
							'</ruby>' +
							'<strong>Samarium</strong>' +
							'<tt>150.360</tt>' +
						'</a>' +
						'<div class="lanthanides">' +
							'<ruby>' +
								'<rt>62</rt><rp>Your browser does not support ruby tag</rp>Sm' +
							'</ruby>' +
							'<strong>Samarium</strong>' +
							'<tt>150.360</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="lanthanides">' +
						'<a href="' + link + 'Europium" title="Europium">' +
							'<ruby>' +
								'<rt>63</rt><rp>Your browser does not support ruby tag</rp>Eu' +
							'</ruby>' +
							'<strong>Europium</strong>' +
							'<tt>151.964</tt>' +
						'</a>' +
						'<div class="lanthanides">' +
							'<ruby>' +
								'<rt>63</rt><rp>Your browser does not support ruby tag</rp>Eu' +
							'</ruby>' +
							'<strong>Europium</strong>' +
							'<tt>151.964</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="lanthanides">' +
						'<a href="' + link + 'Gadolinium" title="Gadolinium">' +
							'<ruby>' +
								'<rt>64</rt><rp>Your browser does not support ruby tag</rp>Gd' +
							'</ruby>' +
							'<strong>Gadolinium</strong>' +
							'<tt>157.250</tt>' +
						'</a>' +
						'<div class="lanthanides">' +
							'<ruby>' +
								'<rt>64</rt><rp>Your browser does not support ruby tag</rp>Gd' +
							'</ruby>' +
							'<strong>Gadolinium</strong>' +
							'<tt>157.250</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="lanthanides">' +
						'<a href="' + link + 'Terbium" title="Terbium">' +
							'<ruby>' +
								'<rt>65</rt><rp>Your browser does not support ruby tag</rp>Tb' +
							'</ruby>' +
							'<strong>Terbium</strong>' +
							'<tt>158.925</tt>' +
						'</a>' +
						'<div class="lanthanides">' +
							'<ruby>' +
								'<rt>65</rt><rp>Your browser does not support ruby tag</rp>Tb' +
							'</ruby>' +
							'<strong>Terbium</strong>' +
							'<tt>158.925</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="lanthanides">' +
						'<a href="' + link + 'Dysprosium" title="Dysprosium">' +
							'<ruby>' +
								'<rt>66</rt><rp>Your browser does not support ruby tag</rp>Dy' +
							'</ruby>' +
							'<strong>Dysprosium</strong>' +
							'<tt>162.500</tt>' +
						'</a>' +
						'<div class="lanthanides">' +
							'<ruby>' +
								'<rt>66</rt><rp>Your browser does not support ruby tag</rp>Dy' +
							'</ruby>' +
							'<strong>Dysprosium</strong>' +
							'<tt>162.500</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="lanthanides">' +
						'<a href="' + link + 'Holmium" title="Holmium">' +
							'<ruby>' +
								'<rt>67</rt><rp>Your browser does not support ruby tag</rp>Ho' +
							'</ruby>' +
							'<strong>Holmium</strong>' +
							'<tt>164.930</tt>' +
						'</a>' +
						'<div class="lanthanides">' +
							'<ruby>' +
								'<rt>67</rt><rp>Your browser does not support ruby tag</rp>Ho' +
							'</ruby>' +
							'<strong>Holmium</strong>' +
							'<tt>164.930</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="lanthanides">' +
						'<a href="' + link + 'Erbium" title="Erbium">' +
							'<ruby>' +
								'<rt>68</rt><rp>Your browser does not support ruby tag</rp>Er' +
							'</ruby>' +
							'<strong>Erbium</strong>' +
							'<tt>167.259</tt>' +
						'</a>' +
						'<div class="lanthanides">' +
							'<ruby>' +
								'<rt>68</rt><rp>Your browser does not support ruby tag</rp>Er' +
							'</ruby>' +
							'<strong>Erbium</strong>' +
							'<tt>167.259</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="lanthanides">' +
						'<a href="' + link + 'Thulium" title="Thulium">' +
							'<ruby>' +
								'<rt>69</rt><rp>Your browser does not support ruby tag</rp>Tm' +
							'</ruby>' +
							'<strong>Thulium</strong>' +
							'<tt>168.934</tt>' +
						'</a>' +
						'<div class="lanthanides">' +
							'<ruby>' +
								'<rt>69</rt><rp>Your browser does not support ruby tag</rp>Tm' +
							'</ruby>' +
							'<strong>Thulium</strong>' +
							'<tt>168.934</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="lanthanides">' +
						'<a href="' + link + 'Ytterbium" title="Ytterbium">' +
							'<ruby>' +
								'<rt>70</rt><rp>Your browser does not support ruby tag</rp>Yb' +
							'</ruby>' +
							'<strong>Ytterbium</strong>' +
							'<tt>173.045</tt>' +
						'</a>' +
						'<div class="lanthanides">' +
							'<ruby>' +
								'<rt>70</rt><rp>Your browser does not support ruby tag</rp>Yb' +
							'</ruby>' +
							'<strong>Ytterbium</strong>' +
							'<tt>173.045</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="lanthanides">' +
						'<a href="' + link + 'Lutetium" title="Lutetium">' +
							'<ruby>' +
								'<rt>71</rt><rp>Your browser does not support ruby tag</rp>Lu' +
							'</ruby>' +
							'<strong>Lutetium</strong>' +
							'<tt>174.967</tt>' +
						'</a>' +
						'<div class="lanthanides">' +
							'<ruby>' +
								'<rt>71</rt><rp>Your browser does not support ruby tag</rp>Lu' +
							'</ruby>' +
							'<strong>Lutetium</strong>' +
							'<tt>174.967</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
				'</tr>' +
				'<tr>' +
					'<td></td>' +
					'<th class="lanthActin" colspan="2">Actinides</th>' +
					'<td class="actinides">' +
						'<a href="' + link + 'Actinium" title="Actinium">' +
							'<ruby>' +
								'<rt>89</rt><rp>Your browser does not support ruby tag</rp>Ac' +
							'</ruby>' +
							'<strong>Actinium</strong>' +
							'<tt>227</tt>' +
						'</a>' +
						'<div class="actinides">' +
							'<ruby>' +
								'<rt>89</rt><rp>Your browser does not support ruby tag</rp>Ac' +
							'</ruby>' +
							'<strong>Actinium</strong>' +
							'<tt><q class="bracket">227</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="actinides">' +
						'<a href="' + link + 'Thorium" title="Thorium">' +
							'<ruby>' +
								'<rt>90</rt><rp>Your browser does not support ruby tag</rp>Th' +
							'</ruby>' +
							'<strong>Thorium</strong>' +
							'<tt>232.038</tt>' +
						'</a>' +
						'<div class="actinides">' +
							'<ruby>' +
								'<rt>90</rt><rp>Your browser does not support ruby tag</rp>Th' +
							'</ruby>' +
							'<strong>Thorium</strong>' +
							'<tt>232.038</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="actinides">' +
						'<a href="' + link + 'Protactinium" title="Protactinium">' +
							'<ruby>' +
								'<rt>91</rt><rp>Your browser does not support ruby tag</rp>Pa' +
							'</ruby>' +
							'<strong>Protactinium</strong>' +
							'<tt>231.036</tt>' +
						'</a>' +
						'<div class="actinides">' +
							'<ruby>' +
								'<rt>91</rt><rp>Your browser does not support ruby tag</rp>Pa' +
							'</ruby>' +
							'<strong>Protactinium</strong>' +
							'<tt>231.036</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="actinides">' +
						'<a href="' + link + 'Uranium" title="Uranium">' +
							'<ruby>' +
								'<rt>92</rt><rp>Your browser does not support ruby tag</rp>U' +
							'</ruby>' +
							'<strong>Uranium</strong>' +
							'<tt>238.029</tt>' +
						'</a>' +
						'<div class="actinides">' +
							'<ruby>' +
								'<rt>92</rt><rp>Your browser does not support ruby tag</rp>U' +
							'</ruby>' +
							'<strong>Uranium</strong>' +
							'<tt>238.029</tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="actinides">' +
						'<a href="' + link + 'Neptunium" title="Neptunium">' +
							'<ruby>' +
								'<rt>93</rt><rp>Your browser does not support ruby tag</rp>Np' +
							'</ruby>' +
							'<strong>Neptunium</strong>' +
							'<tt>237</tt>' +
						'</a>' +
						'<div class="actinides">' +
							'<ruby>' +
								'<rt>93</rt><rp>Your browser does not support ruby tag</rp>Np' +
							'</ruby>' +
							'<strong>Neptunium</strong>' +
							'<tt><q class="bracket">237</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="actinides">' +
						'<a href="' + link + 'Plutonium" title="Plutonium">' +
							'<ruby>' +
								'<rt>94</rt><rp>Your browser does not support ruby tag</rp>Pu' +
							'</ruby>' +
							'<strong>Plutonium</strong>' +
							'<tt>244</tt>' +
						'</a>' +
						'<div class="actinides">' +
							'<ruby>' +
								'<rt>94</rt><rp>Your browser does not support ruby tag</rp>Pu' +
							'</ruby>' +
							'<strong>Plutonium</strong>' +
							'<tt><q class="bracket">244</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="actinides">' +
						'<a href="' + link + 'Americium" title="Americium">' +
							'<ruby>' +
								'<rt>95</rt><rp>Your browser does not support ruby tag</rp>Am' +
							'</ruby>' +
							'<strong>Americium</strong>' +
							'<tt>243</tt>' +
						'</a>' +
						'<div class="actinides">' +
							'<ruby>' +
								'<rt>95</rt><rp>Your browser does not support ruby tag</rp>Am' +
							'</ruby>' +
							'<strong>Americium</strong>' +
							'<tt><q class="bracket">243</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="actinides">' +
						'<a href="' + link + 'Curium" title="Curium">' +
							'<ruby>' +
								'<rt>96</rt><rp>Your browser does not support ruby tag</rp>Cm' +
							'</ruby>' +
							'<strong>Curium</strong>' +
							'<tt>247</tt>' +
						'</a>' +
						'<div class="actinides">' +
							'<ruby>' +
								'<rt>96</rt><rp>Your browser does not support ruby tag</rp>Cm' +
							'</ruby>' +
							'<strong>Curium</strong>' +
							'<tt><q class="bracket">247</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="actinides">' +
						'<a href="' + link + 'Berkelium" title="Berkelium">' +
							'<ruby>' +
								'<rt>97</rt><rp>Your browser does not support ruby tag</rp>Bk' +
							'</ruby>' +
							'<strong>Berkelium</strong>' +
							'<tt>247</tt>' +
						'</a>' +
						'<div class="actinides">' +
							'<ruby>' +
								'<rt>97</rt><rp>Your browser does not support ruby tag</rp>Bk' +
							'</ruby>' +
							'<strong>Berkelium</strong>' +
							'<tt><q class="bracket">247</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="actinides">' +
						'<a href="' + link + 'Californium" title="Californium">' +
							'<ruby>' +
								'<rt>98</rt><rp>Your browser does not support ruby tag</rp>Cf' +
							'</ruby>' +
							'<strong>Californium</strong>' +
							'<tt>251</tt>' +
						'</a>' +
						'<div class="actinides">' +
							'<ruby>' +
								'<rt>98</rt><rp>Your browser does not support ruby tag</rp>Cf' +
							'</ruby>' +
							'<strong>Californium</strong>' +
							'<tt><q class="bracket">251</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="actinides">' +
						'<a href="' + link + 'Einsteinium" title="Einsteinium">' +
							'<ruby>' +
								'<rt>99</rt><rp>Your browser does not support ruby tag</rp>Es' +
							'</ruby>' +
							'<strong>Einsteinium</strong>' +
							'<tt>252</tt>' +
						'</a>' +
						'<div class="actinides">' +
							'<ruby>' +
								'<rt>99</rt><rp>Your browser does not support ruby tag</rp>Es' +
							'</ruby>' +
							'<strong>Einsteinium</strong>' +
							'<tt><q class="bracket">252</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="actinides">' +
						'<a href="' + link + 'Fermium" title="Fermium">' +
							'<ruby>' +
								'<rt>100</rt><rp>Your browser does not support ruby tag</rp>Fm' +
							'</ruby>' +
							'<strong>Fermium</strong>' +
							'<tt>257</tt>' +
						'</a>' +
						'<div class="actinides">' +
							'<ruby>' +
								'<rt>100</rt><rp>Your browser does not support ruby tag</rp>Fm' +
							'</ruby>' +
							'<strong>Fermium</strong>' +
							'<tt><q class="bracket">257</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="actinides">' +
						'<a href="' + link + 'Mendelevium" title="Mendelevium">' +
							'<ruby>' +
								'<rt>101</rt><rp>Your browser does not support ruby tag</rp>Md' +
							'</ruby>' +
							'<strong>Mendelevium</strong>' +
							'<tt>258</tt>' +
						'</a>' +
						'<div class="actinides">' +
							'<ruby>' +
								'<rt>101</rt><rp>Your browser does not support ruby tag</rp>Md' +
							'</ruby>' +
							'<strong>Mendelevium</strong>' +
							'<tt><q>258</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="actinides">' +
						'<a href="' + link + 'Nobelium" title="Nobelium">' +
							'<ruby>' +
								'<rt>102</rt><rp>Your browser does not support ruby tag</rp>No' +
							'</ruby>' +
							'<strong>Nobelium</strong>' +
							'<tt>259</tt>' +
						'</a>' +
						'<div class="actinides">' +
							'<ruby>' +
								'<rt>102</rt><rp>Your browser does not support ruby tag</rp>No' +
							'</ruby>' +
							'<strong>Nobelium</strong>' +
							'<tt><q class="bracket">259</q></tt>' +							'<hr class="atomic_number"/>' +							'<hr class="atomic_symbol"/>' +							'<hr class="atomic_name"/>' +							'<hr class="atomic_mass"/>' +						'</div>' +
					'</td>' +
					'<td class="actinides">' +
						'<a href="' + link + 'Lawrencium" title="Lawrencium">' +
							'<ruby>' +
								'<rt>103</rt><rp>Your browser does not support ruby tag</rp>Lr' +
							'</ruby>' +
							'<strong>Lawrencium</strong>' +
							'<tt>266</tt>' +
						'</a>' +
						'<div class="actinides">' +
							'<ruby>' +
								'<rt>103</rt><rp>Your browser does not support ruby tag</rp>Lr' +
								'</ruby>' +
								'<strong>Lawrencium</strong>' +
								'<tt><q>266</q></tt>' +
							'</div>' +
						'</td>' +
					'</tr>' +
					'<tr></tr>' +
					'<tr class="groups">' +
						'<td colspan="19">' +
							'<a href="' + link + 'Alkali_metal" class="alkaliMetalsSeries" title="Alkali Metal">' +
								'<strong class="series">Alkali  Metal</strong>' +
							'</a>' +
							'<a href="' + link + 'Alkaline_earth_metal" class="alkalineEarthSeries" title="Alkaline Earth">' +
								'<strong class="series">Alkaline  Earth</strong>' +
							'</a>' +
							'<a href="' + link + 'Transition_metal" class="transitMetalsSeries" title="Transition Metal">' +
								'<strong class="series">Transition  Metal</strong>' +
							'</a>' +
							'<a href="' + link + 'Base_metal" class="basicMetalSeries" title="Basic Metal">' +
								'<strong class="series">Basic  Metal</strong>' +
							'</a>' +
							'<a href="' + link + 'Semimetal" class="semiMetalsSeries" title="Semimetals">' +
								'<strong class="series">Semimetals</strong>' +
							'</a>' +
							'<a href="' + link + 'Nonmetal" class="nonMetalsSeries" title="Nonmetals">' +
								'<strong class="series">Nonmetals</strong>' +
							'</a>' +
							'<a href="' + link + 'Halogen" class="halogensSeries" title="Halogens">' +
								'<strong class="series">Halogens</strong>' +
							'</a>' +
							'<a href="' + link + 'Noble_gas" class="nobleGasSeries" title="Noble Gas">' +
								'<strong class="series">Noble  Gas</strong>' +
							'</a>' +
							'<a href="' + link + 'Lanthanide" class="lanthanidesSeries" title="Lanthanides">' +
								'<strong class="series">Lanthanides</strong>' +
							'</a>' +
							'<a href="' + link + 'Actinide" class="actinidesSeries" title="Actinides">' +
								'<strong class="series">Actinides</strong>' +
							'</a>' +
						'</td>' +
					'</tr>';
	table.appendChild(caption);
	table.appendChild(tbody);
	table.appendChild(tfoot);
	main.appendChild(table);
	document.body.appendChild(main);
}