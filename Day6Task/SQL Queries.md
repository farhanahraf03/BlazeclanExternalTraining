SELECT doctorpatientipd.DoctorRowId, doctors.DoctorName , COUNT(*) as 'IPD Patients' from doctorpatientipd, doctors where doctorpatientipd.DoctorRowId = doctors.DoctorRowId group by doctorpatientipd.DoctorRowId

SELECT doctorpatientipd.PatientRowId,patients.PatientName from doctorpatientipd, patients where doctorpatientipd.DoctorRowId in (select doctors.DoctorRowId from doctors where Specialization  = 'Heart') and doctorpatientipd.PatientRowId = patients.PatientRowId
