import { Component } from "react"
import Header from "./ANP/Components/Header"
import Footer from "./ANP/Components/Footer"
import { Box, InputsGroup, TextArea, UploadArea, FeaturedImage, Button, FileIcon, File, CheckboxList, SubmitBox } from "./ANP/Components/Generic/"
import { Input } from "styled-inputs-mini"

class App extends Component{
    state = {}
    componentDidMount(){
        if(localStorage.length !== 0) this.setState({token: localStorage.getItem("token")})
        else {
            let authToken = prompt("Your token:")
            if(authToken){
                localStorage.setItem("token", authToken)
                this.setState({token: authToken})
            }
        }
    }
    render(){
        console.log(this.state)
        const setImgPath = () => {
            this.setState({imgPath: prompt("Enter image path:")})
        }
        const create = () => {
            let houseDetails = {
                address: this.state.friendly_address,
                attachments: [
                    {
                        imgPath: this.state.imgPath
                    }
                ],
                categoryId: this.state.property_id,
                city: this.state.parent_property,
                componentsDto: {
                    additional: "string",
                    airCondition: this.state.air_conditioning === "on" ? true : false,
                    courtyard: true,
                    furniture: true,
                    gasStove: true,
                    internet: true,
                    tv: true
                },
                country: this.state.regions,
                description: this.state.property_description,
                homeAmenitiesDto: {
                    additional: "string",
                    busStop: true,
                    garden: true,
                    market: true,
                    park: true,
                    parking: true,
                    school: true,
                    stadium: true,
                    subway: true,
                    superMarket: true
                },
                houseDetails: {
                    area: this.state.home_area,
                    bath: this.state.baths,
                    beds: this.state.beds,
                    garage: this.state.garages,
                    room: this.state.rooms,
                    yearBuilt: this.state.year_build
                },
                locations: {
                    latitude: this.state.latidude,
                    longitude: this.state.logtitude
                },
                name: this.state.title,
                price: this.state.price,
                region: this.state.regions,
                salePrice: this.state.price_custom,
                status: true,
                zipCode: "1"
            }
            console.log(houseDetails, JSON.stringify(houseDetails));
            fetch("https://houzing-app.herokuapp.com/api/v1/houses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(houseDetails)
            })
        }
        const onSubmit = () => {
            console.log(this.state)
            create()
        }
        const setProperties = ({target}) => {
            this.setState({[target.name]: target.value})
        }
        return <div className="components">
            <Header/>
            <div className="form toCenter">
                <h1>Add new property</h1>
                <Box>
                    <h3>Contact information</h3>
                    <InputsGroup>
                        <Input name="property_title" theme="classic" width="50%" placeholder="Property title*" onChange={setProperties}/>
                        <Input name="title" theme="classic" width="50%" placeholder="Title" onChange={setProperties}/>
                    </InputsGroup>
                    <TextArea name="property_description" placeholder="Property Description" onChange={setProperties}/>
                </Box>
                <Box>
                    <h3>Additional</h3>
                    <InputsGroup>
                        <Input name="property_id" theme="classic" width="33.333%" placeholder="Property ID" onChange={setProperties}/>
                        <Input name="parent_property" theme="classic" width="33.333%" placeholder="Parent property" onChange={setProperties}/>
                        <Input name="status" theme="classic" width="33.333%" placeholder="Status" onChange={setProperties}/>
                    </InputsGroup>
                    <InputsGroup>
                        <Input name="label" theme="classic" width="33.333%" placeholder="Label" onChange={setProperties}/>
                        <Input name="material" theme="classic" width="33.333%" placeholder="Material" onChange={setProperties}/>
                        <Input name="rooms" theme="classic" width="33.333%" placeholder="Rooms" onChange={setProperties}/>
                    </InputsGroup>
                    <InputsGroup>
                        <Input name="beds" theme="classic" width="33.333%" placeholder="Beds" onChange={setProperties}/>
                        <Input name="baths" theme="classic" width="33.333%" placeholder="Baths" onChange={setProperties}/>
                        <Input name="garages" theme="classic" width="33.333%" placeholder="Garages" onChange={setProperties}/>
                    </InputsGroup>
                    <InputsGroup>
                        <Input name="year_build" theme="classic" width="33.333%" placeholder="Year build" onChange={setProperties}/>
                        <Input name="home_area" theme="classic" width="33.333%" placeholder="Home area (sqft)" onChange={setProperties}/>
                        <Input name="lot_deminsions" theme="classic" width="33.333%" placeholder="Lot deminsions" onChange={setProperties}/>
                    </InputsGroup>
                    <Input name="lot_area" theme="classic" placeholder="Lot area (sqft)" onChange={setProperties}/>
                </Box>
                <Box>
                    <h3>Price</h3>
                    <InputsGroup>
                        <Input name="price" theme="classic" width="50%" placeholder="Price ($)" onChange={setProperties}/>
                        <Input name="price_prefix" theme="classic" width="50%" placeholder="Price Prefix" onChange={setProperties}/>
                    </InputsGroup>
                    <InputsGroup mb="0rem">
                        <Input name="price_suffix" theme="classic" width="50%" placeholder="Price Suffix" onChange={setProperties}/>
                        <Input name="price_custom" theme="classic" width="50%" placeholder="Price Custom" onChange={setProperties}/>
                    </InputsGroup>
                </Box>
                <Box>
                    <h3>Location</h3>
                    <InputsGroup>
                        <Input name="regions" theme="classic" width="50%" placeholder="Regions" onChange={setProperties}/>
                        <Input name="friendly_address" theme="classic" width="50%" placeholder="Friendly address" onChange={setProperties}/>
                    </InputsGroup>
                    <InputsGroup>
                        <Input name="map" theme="classic" placeholder="Map location" onChange={setProperties}/>
                    </InputsGroup>
                    <InputsGroup mb="0rem">
                        <Input name="latidude" theme="classic" width="50%" placeholder="Latidude" onChange={setProperties}/>
                        <Input name="logtitude" theme="classic" width="50%" placeholder="Logtitude" onChange={setProperties}/>
                    </InputsGroup>
                </Box>
                <Box>
                    <h3>Media</h3>
                    <UploadArea>
                        <span>Featured image</span>
                        <div className="wrapper2">
                            <FeaturedImage/>
                            <FeaturedImage/>
                            <FeaturedImage/>
                            <FeaturedImage/>
                        </div>
                        <div>
                            <Button onClick={setImgPath}>Upload</Button>
                        </div>
                    </UploadArea>
                    <UploadArea>
                        <span>Gallery</span>
                        <div>
                            <Button onClick={setImgPath}>Upload</Button>
                        </div>
                    </UploadArea>
                    <UploadArea>
                        <span>Attachment</span>
                        <File>
                            <FileIcon/>
                            test_property.pdf
                        </File>
                        <div>
                            <Button onClick={setImgPath}>Upload</Button>
                        </div>
                    </UploadArea>
                    <InputsGroup>
                        <Input name="video_link" theme="classic" placeholder="Video link" onChange={setProperties}/>
                    </InputsGroup>
                    <TextArea name="virtual_tour" placeholder="Virtual tour" onChange={setProperties}></TextArea>
                </Box>
                <Box>
                    <h3>Amenities</h3>
                    <div>
                        <CheckboxList className="chlist">
                            <div>
                                <input type="checkbox" name="air_conditioning" id="a" onChange={setProperties}/>
                                <label htmlFor="a">Air conditioning</label>
                            </div>
                            <div>
                                <input type="checkbox" name="lawn" id="b" onChange={setProperties}/>
                                <label htmlFor="b">Lawn</label>
                            </div>
                            <div>
                                <input type="checkbox" name="dinning_room" id="c" onChange={setProperties}/>
                                <label htmlFor="c">Dinning Room</label>
                            </div>
                            <div>
                                <input type="checkbox" name="water_front" id="d" onChange={setProperties}/>
                                <label htmlFor="a">Waterfront</label>
                            </div>
                        </CheckboxList>
                        <CheckboxList className="chlist">
                            <div>
                                <input type="checkbox" name="barbeque" id="e" onChange={setProperties}/>
                                <label htmlFor="e">Barbeque</label>
                            </div>
                            <div>
                                <input type="checkbox" name="microwave" id="f" onChange={setProperties}/>
                                <label htmlFor="f">Microwave</label>
                            </div>
                            <div>
                                <input type="checkbox" name="fireplace" id="g" onChange={setProperties}/>
                                <label htmlFor="g">Fireplace</label>
                            </div>
                            <div>
                                <input type="checkbox" name="parking" id="aa" onChange={setProperties}/>
                                <label htmlFor="aa">Parking</label>
                            </div>
                        </CheckboxList>
                        <CheckboxList className="chlist">
                            <div>
                                <input type="checkbox" name="dryer" id="ab" onChange={setProperties}/>
                                <label htmlFor="ab">Dryer</label>
                            </div>
                            <div>
                                <input type="checkbox" name="outdoor_shower" id="ac" onChange={setProperties}/>
                                <label htmlFor="ac">Outdoor Shower</label>
                            </div>
                            <div>
                                <input type="checkbox" name="pets_allowed" id="ad" onChange={setProperties}/>
                                <label htmlFor="ad">Pets Allowed</label>
                            </div>
                            <div>
                                <input type="checkbox" name="doorman" id="ae" onChange={setProperties}/>
                                <label htmlFor="ae">Doorman</label>
                            </div>
                        </CheckboxList>
                    </div>
                </Box>
                <Box>
                    <h3>Select Energy Class</h3>
                    <InputsGroup mb="1rem">
                        <Input name="energy_class" theme="classic" width="50%" placeholder="Energy class" onChange={setProperties}/>
                        <Input name="energy_index" theme="classic" width="50%" placeholder="Energy Index in kWh/m2a" onChange={setProperties}/>
                    </InputsGroup>
                </Box>
                <SubmitBox>
                    <button type="submit" onClick={onSubmit}>Submit</button>
                </SubmitBox>
            </div>
            <Footer/>
        </div>
    }
}

export default App;