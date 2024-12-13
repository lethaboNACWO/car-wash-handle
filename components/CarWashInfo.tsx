/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// frontend/components/CarWashInfo.tsx
/*import React from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../utils/api';


interface CarWashInfoProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    formData: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFormData: React.Dispatch<React.SetStateAction<any>>;
    setStep: React.Dispatch<React.SetStateAction<number>>;
  }

const CarWashInfo: React.FC<CarWashInfoProps> = ({ formData, setFormData, setStep }) => {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    setFormData({ ...formData, ownerInfo: data });
    setStep(2); // Move to next step
    try {
      await api.post('/user', data); // Assuming the user API endpoint
      setNextStep(true);
    } catch (error) {
      console.error('Error creating owner:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Car Wash Information</h2>
      <input {...register('car_wash_name')} placeholder="Car Wash Name" />
      <input {...register('registered_business_name')} placeholder="Registered Business Name" />
      <input {...register('registration_no')} placeholder="Registration No" />
      <input type="submit" value="Next" />
    </form>
  );
};

export default CarWashInfo;
function setNextStep(_arg0: boolean) {
    throw new Error('Function not implemented.');
}
*/
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '@/styles/Form.module.scss';


type CarWashFormProps = {
  formData: any;
  setFormData: (value: any) => void;
  setStep: (value: number) => void;
};

const CarWashInfo: React.FC<CarWashFormProps> = ({ formData, setFormData, setStep }) => {
  const { register, handleSubmit, reset } = useForm<CarWashInfo>();

  const onSubmit = (data: CarWashInfo) => {
    setFormData({ ...formData, carWashInfo: data });
    setStep(2); // Move to the next step
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.header}>Car Wash Information</h2>

      <div className="form-group">
        <label>Car Wash Name</label>
        <input
          className={styles.inputField}
          {...register('car_wash_name', { required: 'Car Wash Name is required' })}
          placeholder="Enter Car Wash Name"
          defaultValue={formData.carWashInfo?.car_wash_name || ''}
          title="Enter the full name of the car wash."
        />
      </div>

      <div className="form-group">
        <label>Registration Number</label>
        <input
        className={styles.inputField}
          {...register('registration_number', { required: 'Registration Number is required' })}
          placeholder="Enter Registration Number"
          defaultValue={formData.carWashInfo?.registration_number || ''}
          title="Enter the car wash's official registration number."
        />
      </div>

      <div className="form-group">
        <label>Physical Address</label>
        <textarea
          className={styles.inputField}
          {...register('physical_address', { required: 'Physical Address is required' })}
          placeholder="Enter Physical Address"
          defaultValue={formData.carWashInfo?.physical_address || ''}
          title="Enter the physical address of the car wash."
        />
      </div>

      <div className="form-group">
        <label>Contact Number</label>
        <input
          className={styles.inputField}
          {...register('contact_number', { required: 'Contact Number is required' })}
          placeholder="Enter Contact Number"
          defaultValue={formData.carWashInfo?.contact_number || ''}
          title="Provide the main contact number for the car wash."
        />
      </div>

      <div className="form-group">
        <label>Operating Hours</label>
        <input
          className={styles.inputField}
          {...register('operating_hours', { required: 'Operating Hours are required' })}
          placeholder="E.g., 9:00 AM - 6:00 PM"
          defaultValue={formData.carWashInfo?.operating_hours || ''}
          title="Specify the operating hours of the car wash."
        />
      </div>

      <div className="form-group">
        <label>Services Offered</label>
        <select
          className={styles.selectField}
          {...register('services_offered', { required: 'Select at least one service' })}
          multiple
          defaultValue={formData.carWashInfo?.services_offered || []}
          title="Select the services provided by the car wash."
        >
          <option value="Exterior Cleaning">Exterior Cleaning</option>
          <option value="Interior Cleaning">Interior Cleaning</option>
          <option value="Polishing">Polishing</option>
          <option value="Waxing">Waxing</option>
          <option value="Vacuuming">Vacuuming</option>
        </select>
      </div>

      <div className={styles.dateFieldContainer}>
        <label>Joining Date</label>
        <input
          type="date"
          {...register('car_wash_joining_date', { required: 'Joining Date is required' })}
          defaultValue={formData.carWashInfo?.car_wash_joining_date || ''}
          title="Specify the date the car wash joined the system."
        />
      </div>

      <button type="submit">Next</button>
      <button type="button" onClick={() => reset()}>Reset</button>
    </form>
  );
};

export default CarWashInfo;
