import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import AddItemForm from '../components/AddItemForm';

function BoughtItemsPage(){
    return (
      <div>
        <MainTemplate>
            <AddItemForm />
        </MainTemplate> 
      </div>
      );
    }
  export default BoughtItemsPage;