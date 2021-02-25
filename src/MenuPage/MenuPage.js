import { MenuContainer, MenuHeader, MenuContent, MenuRow, MenuBox, MenuBoxAlt, MenuPicture, MenuPictureAlt, MenuItem } from './MenuPage.styled'

export default function MenuPage() {
    return (
        <MenuContainer>
            <MenuHeader>
                Menu
            </MenuHeader>
            <MenuContent>
                <MenuRow>
                    <MenuBox>
                        <MenuItem menuItemTitle = "wine_"> 
                            red wine  (in moderation), lowers the risk of heart disease, and 
                            opens blood vessels for better circulation.
                        </MenuItem>
                        <MenuItem menuItemTitle = "original_">
                        all natural with no additives.
                        unveiling pork’s natural flavors, rich in vitamin B1.
                        </MenuItem> 
                        <MenuItem menuItemTitle = "miso paste_">
                        is rich in flavor and beneficial in circulating the body’s natural biochemistry.                     
                        </MenuItem>
                        <MenuItem menuItemTitle = "ginseng_">
                        stimulates the metabolism and promotes general wellness and health.
                        </MenuItem>
                        <MenuItem menuItemTitle = "garlic_">
                        garlic lowers cholesterol and high blood pressure and helps the body’s natural flow and simply taste damn good!!!
                        </MenuItem>
                        <MenuItem menuItemTitle = "herb_">
                        natural herbs alleviate stress and depression.
                        </MenuItem>
                        <MenuItem menuItemTitle = "curry_">
                        curry’s complex components helps prevent alzheimer’s disease, as well as certain cancers.
                        </MenuItem>
                        <MenuItem menuItemTitle = "red pepper paste_">
                        gochujang contains protein, healthy fats, vitamins B2, vitamin C and carotene.
                        </MenuItem>
                    </MenuBox>
                    <MenuPicture>

                    </MenuPicture>
                </MenuRow>
                <MenuRow>
                    <MenuPictureAlt>

                    </MenuPictureAlt>
                    <MenuBoxAlt>

                    </MenuBoxAlt>
                </MenuRow>
                <MenuRow>
                    <MenuBox>
                        
                    </MenuBox>
                    <MenuPicture>

                    </MenuPicture>
                </MenuRow>
                <MenuRow>
                    <MenuPictureAlt>

                    </MenuPictureAlt>
                    <MenuBoxAlt>

                    </MenuBoxAlt>
                </MenuRow>
                <MenuRow>
                    <MenuBox>
                        
                    </MenuBox>
                    <MenuPicture>

                    </MenuPicture>
                </MenuRow>
            </MenuContent>
        </MenuContainer>
    )
}