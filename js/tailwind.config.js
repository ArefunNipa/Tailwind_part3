tailwind.config = {
  theme: {
    extend: {
      colors: {
        overlay: 'rgb(22 12 109 / 80%)',
        menubgcolor: 'rgb(22 12 109 / 70%)',
        gcbgcolor: '#F9F9FB',
        ctextcolor:'#141135',
        cbordercolor:'#D9D9D9',
        choosebgcolor:'#FDFDFD',
        choosetextcolor:'#726E9E',
        serbgcolor:'#F6F5FF',
        serbtncolor:'rgba(25, 191, 0, 0.3)',
        serbtnhovercolor:'rgba(255, 255, 255, 0.3)',
        seroverlaycolor:'#6B62C5',
        pricingcolor:'#ECEDF0',
        pricingoverlaycolor:'#6B62C5',
      },

      maxWidth: {
        container: '1320px',
        gallerycontainer: '1170px',
        countercontainer: '1209px',
        choosecontainer: '1147px',
      },

      fontFamily: {
        fontfamilyone: ['Open Sans'],
        fontfamilytwo: ['Paprika'],
      },

      backgroundImage: {
        bannerimage: "url('./images/banner.jpg')",
      },

      fontSize: {
        bannertext: '75px',
      },

      lineHeight: {
        lineheight: '85px',
      }
    }
  }
}