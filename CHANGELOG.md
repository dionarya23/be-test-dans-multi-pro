## v1.15.1 (2022-09-26)

### Fix

- undefined while called grpc createExternalOrder

### Feat

- create trigger post tele consult

## v1.15.0 (2022-09-21)

### Fix

- fix blast invitation chat

### Feat

- add enable handleup

## v1.14.1 (2022-08-16)

### Fix

- generate invoice without usertoken

## v1.14.0 (2022-08-16)

### Fix

- fix is_medcare response
- fix is medcare response
- fix chat duration
- fux cha duration scheedule
- hide push notif completed for chat consultation method

### Feat

- add response is_medcare
- enhance create chat conversation
- **digital-invoice**: handle digital invoice for paid chat
- add welcome messages
- **reminder-commplete-consultation**: add send whatsapp notification consultation completed

## v1.13.0 (2022-08-08)

### Fix

- fix assign doctor hospital and specialist
- fix consultation for direct appointment
- set default doctor id
- fix status paid
- fix schedule time

### Feat

- add assign doctor
- remove validation address for chat
- enhance room api
- integrate chat service
- enhance schedule chat
- create appointment by specialization
- **cors**: add cors for alteacare lite

## v1.12.1 (2022-07-29)

### Fix

- **suratPengantarVoucher**: add unique process for submit voucher

## v1.12.0 (2022-07-19)

### Fix

- **suratVoucher**: add validation request body
- **voucherPartner**: fix validation error problem
- **helper-get-ma-operational-hour**: fix typo threshold_order_expiry_time_in_minutes

### Feat

- **order-expired**: enhance expired order with check ma operational hour

## v1.11.0 (2022-07-14)

### Fix

- fix set new medrec
- **medrec**: handle medrec sap_mika only for schedule with sap_mika
- **suratPartnerVoucher**: add to startDate and endDate to grpc
- **external-voucher-data-service**: add appointment_id in grpc voucher data external service
- fix eslint
- **surat-pengantar-voucher.ejs**: add unescape output html
- **surat-pengantar-voucher.ejs**: change format for term conditions
- **index.js-http-interface**: remove unused logger
- **doc.yml**: change authorization to pro

### Feat

- **medrec**: create approval new medrec
- **suratPengantarVoucher**: change format date
- **reminder-consultation**: add cancel reminder consultation when manual process
- **package-json**: set exact version nunggu js
- **whatsapp-reminder**: add patient id used for get contact phone
- **consultation-reminder**: add whatsapp reminder to start consultation
- **voucher-partner**: create submit voucher partner and remove from medical resume

## v1.10.0 (2022-06-22)

### Feat

- **nunggu**: update version nunggu to v2.1.1
- update nunggu version
- **meet-specialist**: delete meet-specialist job if appointment refunded
- **nunggu-js**: update nunggu-js version
- return error if doctor changed but schedule not changed
- change nunggu js dependency
- **surat-pengantar-voucher-prodia.ejs**: penambahan point 2 dan 5
- **send-email-change-doctor**: change detail billing to billing info
- add log create job and consume job set meet specialist
- add attempts when create job set meet specialist
- change cron set meet specialist using bulljs
- **send-email-full-refund**: add color to list items fees
- **info-update-appointment**: add info update appointment to partner(medcare) service via sqs
- add response amount_paid on list & detail appointment
- enhance create appointment external payload
- enhance billing_info response using billing.info data
- add batch detail appointment using grpc
- enhance response billing info
- **email-notification**: create send email change doctor, payment refund
- show only 1 address on appointment detail
- enhance response appointment

### Fix

- **set-meet-specialist**: delete job when cancel appointment haveBalance
- fix cancel appointment external
- **surat-pengantar-voucher-prodia.ejs**: mem-bold beberapa kata
- fix set meet specialist queue
- fix set meet specialist queue
- **set-meet-specialist**: fix cron set meet specialist and replace bulljs with nunggujs
- add log job bulljs
- fix create new job set meet specialist when update appointment
- fix calculate diffInSeconds using Asia/Jakarta timezone
- fix amount need to pay
- fix update appointment status
- handle if cancel appointment with has balance

## v1.9.0 (2022-05-12)

### Feat

- initialize commitizen
- **appointment**: add new response amount_need_to_pay on list & appointment detail
- enhance create appointment external
- **billing-info**: show billing info no matter condition is from change doctor or not
- **medical-resume**: add response have_medical_resume & have_additional_resume on appointment detail response
- **appointment**: add response external provider on appointment list & detail response
- enhance room jitsi data
- **meet-specialist**: set meet specialist only for appointment with paid status
- remove old routes
- **billing-info**: enhance billing info name based on label on cms
- **billing-info**: add billing info based on label on cms
- **create-appointment-external**: add deliveryAddress data and client data
- **hospital-system**: enhance external hospital system
- change text color billing info
- **appointment**: enhance detai appointment serializer to support new billing process
- **appointment**: add custom ref id when create order for internal purpose
- **room-api**: enhance room api
- **room**: add appointment id when generate room video call
- **room**: split api room for partner to enable socket on default
- **refund**: new refund process
- enhance selected billing id

### Fix

- fix patientId detail room
- **appointment**: fix find appointment when customRefId is exist
- **error-log**: get error from error object if error.message is undefined

## v1.8.0 (2022-04-06)

## v1.7.1 (2022-03-09)

## v1.7.0 (2022-03-02)

## v1.6.0 (2022-02-16)

## v1.5.1 (2022-02-09)

## v1.5.0 (2022-02-08)

## v1.4.7 (2022-02-06)

## v1.4.6 (2022-02-01)

## v1.4.5 (2022-01-26)

## v1.4.4 (2022-01-20)

## v1.4.3 (2022-01-20)

## v1.4.2 (2022-01-20)

## v1.4.1 (2022-01-19)

## v1.4.0 (2022-01-19)

## v1.3.0 (2021-12-20)

## v1.2.6 (2021-11-15)

## v1.2.4 (2021-09-30)

## v1.2.3 (2021-09-29)

## v1.2.2 (2021-09-24)

## v1.2.1 (2021-09-21)

## v1.2.0 (2021-09-20)

## v1.1.2 (2021-09-14)

## v1.1.1 (2021-09-11)

## v1.1.0 (2021-09-10)

## v1.0.23 (2021-09-08)

## v1.0.22 (2021-08-19)

## v1.0.21 (2021-08-13)

## v1.0.20 (2021-08-13)

## v1.0.19 (2021-08-12)

## v1.0.18 (2021-08-10)

## v1.0.17 (2021-08-09)

## v1.0.16 (2021-08-09)

## v1.0.15 (2021-08-05)

## v1.0.14 (2021-08-05)

## v1.0.12 (2021-08-05)

## v1.0.11 (2021-08-04)

## v1.0.10 (2021-07-29)

## v1.0.9 (2021-07-23)

## v1.0.8 (2021-07-10)

## v1.0.7 (2021-07-10)

## v1.0.6 (2021-07-03)

## v1.0.5 (2021-07-01)

## v1.0.4 (2021-06-28)

## v1.0.3 (2021-06-25)

## v1.0.2 (2021-06-23)

## v1.0.1 (2021-06-21)

## v1.0.0 (2021-06-20)
